import { Link, useLocation } from 'react-router';

export default function CreateDefaultNotFoundPage() {
  const location = useLocation();

  return (
    <div style={{ padding: 24, fontFamily: 'system-ui, sans-serif' }}>
      <h1 style={{ fontSize: 32, marginBottom: 8 }}>404</h1>
      <p style={{ marginBottom: 16 }}>
        Nie znaleziono strony: <code>{location.pathname}</code>
      </p>
      <Link to="/">Wróć na stronę główną</Link>
    </div>
  );
}
