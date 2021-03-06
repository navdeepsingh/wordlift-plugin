#!/bin/bash

export _SC_PID=unset

function travis_start_sauce_connect() {
  if [ -z "${SAUCE_USERNAME}" ] || [ -z "${SAUCE_ACCESS_KEY}" ]; then
      echo "This script can't run without your Sauce credentials"
      echo "Please set SAUCE_USERNAME and SAUCE_ACCESS_KEY env variables"
      echo "export SAUCE_USERNAME=ur-username"
      echo "export SAUCE_ACCESS_KEY=ur-access-key"
      return 1
  fi

  local sc_tmp sc_platform sc_distro sc_distro_fmt sc_distro_shasum \
    sc_readyfile sc_logfile sc_dir sc_tunnel_id_arg sc_actual_shasum

  sc_tmp="$(mktemp -d -t sc.XXXX)"
  echo "Using temp dir $sc_tmp"
  pushd $sc_tmp

  sc_platform=$(uname | sed -e 's/Darwin/osx/' -e 's/Linux/linux/')
  case "${sc_platform}" in
      linux)
          sc_distro_fmt=tar.gz
          sc_distro_shasum=57a07a14c5d95d72b6606ba34fceaf5bf76c2865;;
      osx)
          sc_distro_fmt=zip
          sc_distro_shasum=a7e04143c3150975e72ae8fef38067d2752dec8f;;
  esac
  sc_distro=sc-4.4.2-${sc_platform}.${sc_distro_fmt}
  sc_readyfile=sauce-connect-ready-$RANDOM
  sc_logfile=$HOME/sauce-connect.log
  if [ ! -z "${TRAVIS_JOB_NUMBER}" ]; then
    sc_tunnel_id_arg="-i ${TRAVIS_JOB_NUMBER}"
  fi
  echo "Downloading Sauce Connect"
  wget http://saucelabs.com/downloads/${sc_distro}
  sc_actual_shasum="$(openssl sha1 ${sc_distro} | cut -d' ' -f2)"
  if [[ "$sc_actual_shasum" != "$sc_distro_shasum" ]]; then
      echo "SHA1 sum of Sauce Connect file didn't match!"
      return 1
  fi
  sc_dir=$(tar -ztf ${sc_distro} | head -n1)

  echo "Extracting Sauce Connect"
  case "${sc_distro_fmt}" in
      tar.gz)
          tar zxf $sc_distro;;
      zip)
          unzip $sc_distro;;
  esac

  ${sc_dir}/bin/sc \
    ${sc_tunnel_id_arg} \
    -f ${sc_readyfile} \
    -l ${sc_logfile} \
    ${SAUCE_NO_SSL_BUMP_DOMAINS} \
    ${SAUCE_DIRECT_DOMAINS} \
    ${SAUCE_TUNNEL_DOMAINS} &
  _SC_PID="$!"

  echo "Waiting for Sauce Connect readyfile"
  while test ! -f ${sc_readyfile} && ps -f $_SC_PID >&/dev/null; do
    sleep .5
  done

  if test ! -f ${sc_readyfile}; then
    echo "readyfile not created"
  fi

  test -f ${sc_readyfile}
  _result=$?

  popd

  return $_result
}

travis_start_sauce_connect
