import { useState } from 'preact/hooks';
import type { JSXInternal } from 'preact/src/jsx';

export function App(): JSXInternal.Element {
  const [count, setCount] = useState(0);
  const i18n = window.Blinko.i18n;

  return (
    <>
      <h1>{i18n.t('title')}</h1>
      <div class="card">
        <p>AI评论插件已安装并启用</p>
        <p>右键点击任意闪念即可使用AI评论功能</p>
      </div>
    </>
  );
}
