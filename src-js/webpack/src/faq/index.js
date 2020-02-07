/**
 * Initialise the FAQ
 *
 * @since 3.26.0
 * @author Naveen Muthusamy <naveen@wordlift.io>
 */

/**
 * External dependencies
 */
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

/**
 * Internal dependencies.
 */
import AddQuestionButton from "./components/add-question-button";
import store from "./store/index";
import { FaqListHeader } from "./components/faq-list-header";
import FaqList from "./components/faq-list";

const { listBoxId, addQuestionText } = global["_wlFaqSettings"];

window.addEventListener("load", () => {
  ReactDOM.render(
    <Provider store={store}>
      <React.Fragment>
        <FaqListHeader />
        <FaqList />
      </React.Fragment>
    </Provider>,
    document.getElementById(listBoxId)
  );
});