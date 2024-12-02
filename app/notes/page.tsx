import React from "react";
import styles from '@/app/ui/home.module.css';

const NotePage = () => {
  return (
    <div className={styles.iframeContainer}>
      <iframe
        className={styles.iframe}
        src="/notes/notes.html"
        title="Pika-Quiz Notes"
      ></iframe>
    </div>
  );
};

export default NotePage;
