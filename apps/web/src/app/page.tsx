"use client";

import { Button } from '@repo/ui/components/button';
import { toast } from 'sonner';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center space-y-6">
      <div className="flex flex-col items-center space-y-4 rounded-xl p-6 shadow-2xl">
        <h1 className="text-2xl text-center">
          <span className="block">Turborepo</span>
          <span className="block">Shadcn/ui</span>
          <span className="block">Tailwind CSS v4</span>
        </h1>

        <p>Here is your shadcn button.</p>
        <Button
          onClick={() =>
            toast('Event has been created', {
              description: 'Sunday, December 03, 2023 at 9:00 AM',
              action: {
                label: 'Undo',
                onClick: () => console.log('Undo'),
              },
            })
          }
        >
          Button
        </Button>
      </div>
    </div>
  );
}
