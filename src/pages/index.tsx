import React from 'react';
import { Calendar, Button } from 'antd'
import {setLocale, getLocale} from 'umi-plugin-locale'
import styles from './index.css';

export default function() {
  return (
    <div className={styles.normal}>
      <Button onClick={() => setLocale('zh-CN')}>简体中文</Button>
      <Button onClick={() => setLocale('en-US')}>英语</Button>
      <div style={{ width: 300, border: '1px solid #d9d9d9', borderRadius: 4 }}>
        <Calendar fullscreen={false} />
      </div>
      {`umi-plugin-locale: ${getLocale()}`}
    </div>
  );
}
