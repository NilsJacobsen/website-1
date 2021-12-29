import styles from './CmdInstructions.module.scss'
import CodeCopy from './CodeCopy'

const CmdInstructions = ({ appId }: { appId: string }) => {
  return (
    <div className={styles.instructions}>
      <h3>Install</h3>
      <p>
        Make sure to follow the{' '}
        <a href='https://flatpak.org/setup/' target='_blank' rel='noreferrer'>
          setup guide
        </a>{' '}
        before installing
      </p>
      <CodeCopy text={`flatpak install flathub ${appId}`}></CodeCopy>
      <h3>Run</h3>
      <CodeCopy text={`flatpak run ${appId}`}></CodeCopy>
    </div>
  )
}

export default CmdInstructions