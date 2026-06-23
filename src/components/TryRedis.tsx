import { useState } from 'preact/hooks';

export default function TryRedis({ code, label = 'Try in browser (try.redis.io)' }: { code: string; label?: string }) {
  const [copied, setCopied] = useState(false);
  function open() {
    try { navigator.clipboard?.writeText(code).catch(() => {}); } catch {}
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
    window.open('https://try.redis.io/', '_blank', 'noopener');
  }
  return (
    <div class="tr">
      <pre class="tr__code"><code>{code}</code></pre>
      <button class="tr__btn" onClick={open}>{copied ? 'Copied — paste it at try.redis.io' : `${label} ↗`}</button>
    </div>
  );
}
