import { Button } from '@/components/ui/button';
import { useAppContext } from '@/context/user-context';
export default function Index() {
  const { token } = useAppContext();
  return (
    <div>
      <Button>Click me</Button>
    </div>
  );
}
