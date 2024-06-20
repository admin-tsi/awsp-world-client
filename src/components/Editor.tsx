'use client';
import { EditorContent, useEditor } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import React from 'react';

interface MyEditorComponentProps {
  content: string;
}

const MyEditorComponent: React.FC<MyEditorComponentProps> = ({ content }) => {
  const editor = useEditor({
    content: content,
    extensions: [StarterKit],
    editable: false,
  });

  if (!editor) {
    return null;
  }

  return <EditorContent editor={editor} className="text-white" />;
};

export default MyEditorComponent;
