import CodeMirror from '@uiw/react-codemirror'
import { myTheme } from './theme'
import { css as codeCSS } from '@codemirror/lang-css'
import { useCurrentPen } from '@/hooks/useCurrentPen'

export default function Editor() {
  const { pen } = useCurrentPen()

  const css = pen?.steps[0].css
  return (
    <div className="Code relative h-full w-full overflow-y-auto">
      <CodeMirror
        className="h-full w-full"
        value={css}
        width="100%"
        height="100%"
        theme={myTheme}
        extensions={[codeCSS()]}
      />
    </div>
  )
}
