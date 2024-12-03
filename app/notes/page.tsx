import React from "react";
import styles from '@/app/ui/home.module.css';

const NotePage = () => {
  return (

      <iframe
        className={"h-full"}
        src="/notes/notes.html"
        title="Pika-Quiz Notes"
      ></iframe>

  );
};

export default NotePage;
