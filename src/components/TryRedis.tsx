import { useState } from 'preact/hooks';

export default function TryRedis({ code, label = 'Copy commands' }: { code: string; label?: string }) {
  const [copied, setCopied] = useState(false);
  function copy() {
    try { navigator.clipboard?.writeText(code).catch(() => {}); } catch {}
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  }
  return (
    <div class="tr">
      <pre class="tr__code"><code>{code}</code></pre>
      <button class="tr__btn" onClick={copy}>{copied ? 'Copied — paste into your redis-cli' : `${label} ⧉`}</button>
    </div>
  );
}
