/** @jsxImportSource preact */
/// <reference types="systemjs" />

import { render } from 'preact/compat';
import { App } from "./app";
import type { BasePlugin } from 'blinko';
import { Setting } from './setting';
import plugin from '../plugin.json';
import en from './locales/en.json';
import zh from './locales/zh.json';

/**
 * Main plugin entry point registered with SystemJS
 * Exports the plugin class implementing BasePlugin interface
 */
System.register([], (exports) => ({
  execute: () => {
    exports('default', class Plugin implements BasePlugin {
      constructor() {
        // Initialize plugin with metadata from plugin.json
        Object.assign(this, plugin);
      }

      // Flag indicating this plugin has a settings panel
      withSettingPanel = true;

      /**
       * Renders the settings panel UI
       * @returns {HTMLElement} Container element with rendered settings component
       */
      renderSettingPanel = () => {
        const container = document.createElement('div');
        render(<Setting />, container);
        return container;
      }

      /**
       * Initializes the plugin
       * Sets up toolbar icons, right-click menus, and AI write prompts
       */
      async init() {
        // Initialize internationalization
        this.initI18n();
        
        // Add toolbar icon with click handler
        window.Blinko.addToolBarIcon({
          name: "test",
          icon: "<svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='lucide lucide-file'><path d='M13 3H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z'/><polyline points='14 3 14 9 19 9'/></svg>",
          placement: 'top',
          tooltip: 'testtootip',
          content: () => {
            const container = document.createElement('div');
            container.setAttribute('data-plugin', 'my-note-plugin');
            render(<App />, container);
            return container;
          }
        });

<<<<<<< HEAD
        // Add AI Comment right-click menu item
        window.Blinko.addRightClickMenu({
          name: 'ai-comment',
          label: window.Blinko.i18n.t('aiCommentMenu'),
          icon: 'material-symbols:comment',  
          onClick: async (note) => {
            try {
              const { toast, api, i18n } = window.Blinko;
              // Save toastId when showing loading
              const toastId = toast.loading(i18n.t('aiCommentProcessing'));
              
              // Call the AI Comment API
              await api.ai.AIComment.mutate({
                content: note.content,
                noteId: note.id
              });
              
              // Dismiss loading toast before showing success
              toast.dismiss(toastId);
              toast.success(i18n.t('aiCommentSuccess'));
              
              // Refresh the UI to show the new comment
              window.Blinko.globalRefresh();
            } catch (error) {
              console.error('Error adding AI comment:', error);
              // Dismiss loading toast before showing error
              window.Blinko.toast.dismiss();
              window.Blinko.toast.error(window.Blinko.i18n.t('aiCommentError'));
            }
=======
        // Add custom right-click menu item
        window.Blinko.addRightClickMenu({
          name: 'custom-action',
          label: 'Custom Action',
          icon: 'tabler:accessible',  
          onClick: (item) => {
            console.log('Custom action triggered', item)
>>>>>>> 191cee5e18a996e1fed899cc890478485b5475ff
          }
        });

        // Add AI write prompt for translation
        window.Blinko.addAiWritePrompt(
          'Translate Content',
          'Please translate the following content into English:',
          'material-symbols:translate'
        );

        // window.Blinko.showDialog({
        //   title: 'Dialog',
        //   content: () => {
        //     const container = document.createElement('div');
        //     container.setAttribute('data-plugin', 'my-note-plugin');
        //     render(<App />, container);
        //     return container;
        //   }
        // })
      }

      /**
       * Initializes internationalization resources
       * Adds English and Chinese translation bundles
       */
      initI18n() {
        window.Blinko.i18n.addResourceBundle('en', 'translation', en);
        window.Blinko.i18n.addResourceBundle('zh', 'translation', zh);
      }

      /**
       * Cleanup function called when plugin is disabled
       */
      destroy() {
        console.log('Plugin destroyed');
      }
    });
  }
}));