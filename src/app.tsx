import { useState } from 'preact/hooks';
import type { JSXInternal } from 'preact/src/jsx';

export function App(): JSXInternal.Element {
  const [count, setCount] = useState(0);
  const i18n = window.Blinko.i18n;

  return (
    <>
      <h1>{i18n.t('title')}</h1>
      <div class="card">
<<<<<<< HEAD
        <p>AI评论插件已安装并启用</p>
        <p>右键点击任意闪念即可使用AI评论功能</p>
=======
        <button onClick={() => {
          setCount(count => count + 1);
          console.log(window.Blinko.toast.success(i18n.t('successMessage')));
        }}>
          {i18n.t('countLabel', { count })}
        </button>
>>>>>>> 191cee5e18a996e1fed899cc890478485b5475ff
      </div>
    </>
  );
}
