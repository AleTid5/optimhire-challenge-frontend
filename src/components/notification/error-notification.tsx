interface ErrorNotificationProps {
  title?: string;
  errors: Array<string>;
}

export default function ErrorNotification({
  title = "Error!",
  errors = [],
}: ErrorNotificationProps) {
  if (errors.length === 0) {
    return null;
  }

  return (
    <div
      className="absolute top-0 right-0 bg-red-100 border-l-4 border-red-500 text-red-700 p-4 m-8"
      role="alert"
    >
      <p className="font-bold">{title}</p>
      <ul className="list-disc ml-4">
        {errors.map((error, key) => (
          <li key={key}>{error}</li>
        ))}
      </ul>
    </div>
  );
}
