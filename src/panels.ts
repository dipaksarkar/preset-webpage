import type { Editor } from 'grapesjs'
import { RequiredPluginOptions } from '.'

import { cmdImport } from './consts'

export default (editor: Editor, opts: RequiredPluginOptions) => {
  const { Panels } = editor
  // const config = editor.getConfig();
  const swv = 'sw-visibility'
  const expt = 'export-template'
  const osm = 'open-sm'
  const otm = 'open-tm'
  const obl = 'open-blocks'
  const ful = 'fullscreen'
  const prv = 'preview'
  const iconStyle = 'style="display: block; max-width:22px"'

  // config.showDevices = false;

  Panels.getPanels().reset([
    {
      id: 'commands',
      buttons: [{}]
    },
    {
      id: 'options',
      buttons: [
        {
          id: swv,
          command: swv,
          context: swv,
          label: `<svg ${iconStyle} viewBox="0 0 24 24"><path fill="currentColor" d="M15,5H17V3H15M15,21H17V19H15M11,5H13V3H11M19,5H21V3H19M19,9H21V7H19M19,21H21V19H19M19,13H21V11H19M19,17H21V15H19M3,5H5V3H3M3,9H5V7H3M3,13H5V11H3M3,17H5V15H3M3,21H5V19H3M11,21H13V19H11M7,21H9V19H7M7,5H9V3H7V5Z" /></svg>`
        },
        {
          id: prv,
          context: prv,
          command: () => editor.runCommand(prv),
          label: `<svg ${iconStyle} viewBox="0 0 24 24"><path fill="currentColor" d="M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9M12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17M12,4.5C7,4.5 2.73,7.61 1,12C2.73,16.39 7,19.5 12,19.5C17,19.5 21.27,16.39 23,12C21.27,7.61 17,4.5 12,4.5Z"></path></svg>`
        },
        {
          id: ful,
          command: ful,
          context: ful,
          label: `<svg ${iconStyle} viewBox="0 0 24 24"><path fill="currentColor" d="M5,5H10V7H7V10H5V5M14,5H19V10H17V7H14V5M17,14H19V19H14V17H17V14M10,17V19H5V14H7V17H10Z" /></svg>`
        },
        {
          id: expt,
          command: () => editor.runCommand(expt),
          label: `<svg ${iconStyle} viewBox="0 0 24 24"><path fill="currentColor" d="M12.89,3L14.85,3.4L11.11,21L9.15,20.6L12.89,3M19.59,12L16,8.41V5.58L22.42,12L16,18.41V15.58L19.59,12M1.58,12L8,5.58V8.41L4.41,12L8,15.58V18.41L1.58,12Z" /></svg>`
        },
        {
          id: 'undo',
          command: () => editor.runCommand('core:undo'),
          label: `<svg ${iconStyle} viewBox="0 0 24 24"><path fill="currentColor" d="M20 13.5C20 17.09 17.09 20 13.5 20H6V18H13.5C16 18 18 16 18 13.5S16 9 13.5 9H7.83L10.91 12.09L9.5 13.5L4 8L9.5 2.5L10.92 3.91L7.83 7H13.5C17.09 7 20 9.91 20 13.5Z" /></svg>`
        },
        {
          id: 'redo',
          command: () => editor.runCommand('core:redo'),
          label: `<svg ${iconStyle} viewBox="0 0 24 24"><path fill="currentColor" d="M10.5 18H18V20H10.5C6.91 20 4 17.09 4 13.5S6.91 7 10.5 7H16.17L13.08 3.91L14.5 2.5L20 8L14.5 13.5L13.09 12.09L16.17 9H10.5C8 9 6 11 6 13.5S8 18 10.5 18Z" /></svg>`
        },
        {
          id: cmdImport,
          command: () => editor.runCommand(cmdImport),
          label: `<svg ${iconStyle} viewBox="0 0 24 24"><path fill="currentColor" d="M5,20H19V18H5M19,9H15V3H9V9H5L12,16L19,9Z" /></svg>`
        }
      ]
    },
    {
      id: 'views',
      buttons: [
        {
          id: osm,
          command: osm,
          active: true,
          label: `<svg ${iconStyle} viewBox="0 0 24 24"><path fill="currentColor" d="M20.71,4.63L19.37,3.29C19,2.9 18.35,2.9 17.96,3.29L9,12.25L11.75,15L20.71,6.04C21.1,5.65 21.1,5 20.71,4.63M7,14A3,3 0 0,0 4,17C4,18.31 2.84,19 2,19C2.92,20.22 4.5,21 6,21A4,4 0 0,0 10,17A3,3 0 0,0 7,14Z" /></svg>`
        },
        {
          id: otm,
          command: otm,
          label: `<svg ${iconStyle} xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M440-120v-240h80v80h320v80H520v80h-80Zm-320-80v-80h240v80H120Zm160-160v-80H120v-80h160v-80h80v240h-80Zm160-80v-80h400v80H440Zm160-160v-240h80v80h160v80H680v80h-80Zm-480-80v-80h400v80H120Z"/></svg>`
        },
        {
          id: obl,
          command: obl,
          label: `<svg ${iconStyle} viewBox="0 0 24 24"><path fill="currentColor" d="M17,13H13V17H11V13H7V11H11V7H13V11H17M19,3H5C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5C21,3.89 20.1,3 19,3Z" /></svg>`
        }
      ]
    }
  ])

  const openBl = Panels.getButton('views', obl)
  editor.on('load', () => openBl?.set('active', true))

  // On component change show the Style Manager
  opts.showStylesOnChange &&
    editor.on('component:selected', () => {
      const openSmBtn = Panels.getButton('views', osm)

      // Don't switch when the Layer Manager is on or
      // there is no selected component
      if (editor.getSelected()) {
        openSmBtn?.set('active', true)
      }
    })
}
