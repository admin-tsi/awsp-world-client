'use client';

import { cn } from '@/lib/utils';
import { EditorContent, useEditor } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import React from 'react';

interface MyEditorComponentProps {
  content: string;
  className?: string;
}

const MyEditorComponent: React.FC<MyEditorComponentProps> = ({
  content,
  className,
}) => {
  const editor = useEditor({
    content: content,
    extensions: [StarterKit],
    editable: false,
  });

  if (!editor) {
    return null;
  }

  return (
    <EditorContent editor={editor} className={cn(className, 'text-white')} />
  );
};

export default MyEditorComponent;
