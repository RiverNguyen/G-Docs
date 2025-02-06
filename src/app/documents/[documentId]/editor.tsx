"use client";

import { useEditor, EditorContent } from "@tiptap/react";
import { Color } from "@tiptap/extension-color";
import Highlight from "@tiptap/extension-highlight";
import StarterKit from "@tiptap/starter-kit";
import FontFamily from "@tiptap/extension-font-family";
import TextStyle from "@tiptap/extension-text-style";
import TaskItem from "@tiptap/extension-task-item";
import Image from "@tiptap/extension-image";
import ImageResize from "tiptap-extension-resize-image";
import Table from "@tiptap/extension-table";
import TableCell from "@tiptap/extension-table-cell";
import TableHeader from "@tiptap/extension-table-header";
import TableRow from "@tiptap/extension-table-row";
import TaskList from "@tiptap/extension-task-list";
import Underline from "@tiptap/extension-underline";
import Toolbar from "./toolbar";

import { useEditorStore } from "@/store/use-editor-store";

export const Editor = () => {
  const { setEditor } = useEditorStore();

  const editor = useEditor({
    onCreate({ editor }) {
      setEditor(editor);
    },
    onDestroy() {
      setEditor(null);
    },
    onUpdate({ editor }) {
      setEditor(editor);
    },
    onSelectionUpdate({ editor }) {
      setEditor(editor);
    },
    onTransaction({ editor }) {
      setEditor(editor);
    },
    onFocus({ editor }) {
      setEditor(editor);
    },
    onBlur({ editor }) {
      setEditor(editor);
    },
    onContentError({ editor, error }) {
      console.error("Content Error", error);
      setEditor(editor);
    },
    editorProps: {
      attributes: {
        style: "padding-left: 56px; padding-right: 56px;",
        class:
          "focus:outline-none print:border-0 bg-white border border-[#c7c7c7] flex flex-col min-h-[1054px] w-[816px] pt-10 pr-14 pb-10 cursor-text jus",
      },
    },
    extensions: [
      StarterKit,
      Color,
      Highlight.configure({
        multicolor: true,
      }),
      FontFamily,
      TextStyle,
      Underline,
      TaskList,
      TaskItem.configure({
        nested: true,
      }),
      Table,
      TableCell,
      TableHeader,
      TableRow,
      Image,
      ImageResize,
    ],
    content: `<table>
          <tbody>
            <tr>
              <th>Name</th>
              <th colspan="3">Description</th>
            </tr>
            <tr>
              <td>Cyndi Lauper</td>
              <td>Singer</td>
              <td>Songwriter</td>
              <td>Actress</td>
            </tr>
          </tbody>
        </table>`,
  });

  return (
    <div className="size-full overflow-x-auto bg-[#F9FBFD] px-4 print:p-0 print:bg-white print:overflow-visible">
      <Toolbar />
      <div className="min-w-max flex justify-center w-[816px] py-4 print:p-0 mx-auto print:w-full print:min-w-0">
        <EditorContent editor={editor} />
      </div>
    </div>
  );
};
