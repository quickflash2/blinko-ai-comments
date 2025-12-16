import { useState, useEffect } from 'preact/hooks';
import type { JSXInternal } from 'preact/src/jsx';

/**
 * Setting component for AI Comment plugin
 */
export function Setting(): JSXInternal.Element {
  const i18n = window.Blinko.i18n;

  return (
    <div className="max-w-2xl mx-auto p-2 rounded-lg">
      <h2 className="text-lg font-semibold mb-4">{i18n.t('title')}</h2>
      <div className="space-y-4">
        <p>{i18n.t('pluginDescription')}</p>
        <div className="bg-gray-100 p-3 rounded">
          <h3 className="font-medium mb-2">使用说明</h3>
          <ul className="list-disc list-inside space-y-1 text-sm">
            <li>右键点击任意闪念</li>
            <li>选择"AI评论"选项</li>
            <li>等待AI生成评论</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
