import Card from "../card";

interface ErrorCardProps {
  className?: string;
}

export default function ErrorCard({ className }: ErrorCardProps) {
  return (
    <Card
      backgroundColor="bg-danger-300"
      className={`text-red-600 ${className}`}
    >
      <div className="font-bold text-xl">We apologize 😞</div>
      <div className="font-light">
        An error has occurred, please try again in a few minutes
      </div>
    </Card>
  );
}
