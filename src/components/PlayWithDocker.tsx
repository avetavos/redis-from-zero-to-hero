import { useState } from 'preact/hooks';

export default function PlayWithDocker({ code, label = 'Try in Play with Docker' }: { code: string; label?: string }) {
  const [copied, setCopied] = useState(false);
  function open() {
    try { navigator.clipboard?.writeText(code).catch(() => {}); } catch {}
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
    window.open('https://labs.play-with-docker.com/', '_blank', 'noopener');
  }
  return (
    <div class="pwd">
      <pre class="pwd__code"><code>{code}</code></pre>
      <button class="pwd__btn" onClick={open}>{copied ? 'Copied — paste it in Play with Docker' : `${label} ↗`}</button>
    </div>
  );
}
