import { AlertCircle } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

interface AlertDestructiveProps {
  onHideWarning: () => void;
  description: string;
}

export function AlertDestructive({
  onHideWarning,
  description,
}: AlertDestructiveProps) {
  const handleHideWarning = () => {
    onHideWarning();
  };

  return (
    <Alert variant="destructive" className="relative">
      <button
        className="absolute top-0 right-2 md:right-4 text-3xl"
        onClick={handleHideWarning}
      >
        &times;
      </button>
      <AlertCircle className="h-4 w-4" />
      <AlertTitle>Warning</AlertTitle>
      <AlertDescription>{description}</AlertDescription>
    </Alert>
  );
}
