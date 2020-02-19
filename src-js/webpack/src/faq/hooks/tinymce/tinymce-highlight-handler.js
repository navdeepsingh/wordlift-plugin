/**
 * TinyMceHighlightHandler handles the toolbar button.
 * @since 3.26.0
 * @author Naveen Muthusamy <naveen@wordlift.io>
 */

import { FAQ_HIGHLIGHT_TEXT, FAQ_ITEMS_CHANGED } from "../../constants/faq-hook-constants";
import { on } from "backbone";
import { classExtractor } from "../../../mappings/blocks/helper";

const QUESTION_HIGHLIGHT_COLOR = "#00ff00";

const ANSWER_HIGHLIGHT_COLOR = "#00FFFF";

class TinymceHighlightHandler {
  /**
   * Construct highlight handler instance.
   * @param editor {tinymce.Editor} The Tinymce editor instance.
   * @param store Redux store.
   */
  constructor(editor, store) {
    this.editor = editor;
    this.store = store;
    this.highlightWhenStoreDataChange();
    // Keep a reference to the strings which are highlighted.
    this.highlightedStrings = [];
    /**
     * Listen for highlighting events, then highlight the text.
     * Expected object from the event
     * {
     *     text: string,
     *     isQuestion:Boolean
     * }
     */
    on(FAQ_HIGHLIGHT_TEXT, result => {
      this.highlightSelectedText(result.text, result.isQuestion);
    });
  }

  /**
   * Listen for the change in FAQ items, if there is
   * a change in the FAQ items then the highlighting
   * should be done again.
   */
  highlightWhenStoreDataChange() {
    on(FAQ_ITEMS_CHANGED, faqItems => {
      faqItems.map(e => {
        this.highlightSelectedText(e.question, true);
        this.highlightSelectedText(e.answer, false);
      });
    });
  }

  highlightSelectedText(selectedText, isQuestion) {
    if (this.highlightedStrings.includes(selectedText)) {
      // Dont highlight if it is already highlighted.
      return;
    }
    const className = classExtractor({
      "wl-faq__question": isQuestion,
      "wl-faq__answer": !isQuestion
    });
    this.highlightedStrings.push(selectedText);
    const editor = this.editor;
    const selection = editor.dom.select("span.wl-faq__answer");
    const highlightedElement = `<span class="${className}">${selectedText}</span>`;
    editor.selection.setContent(highlightedElement);
  }
}

export default TinymceHighlightHandler;