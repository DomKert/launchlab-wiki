import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="flex flex-col justify-center text-center flex-1 gap-4">
      <h1 className="text-3xl font-bold">LaunchLab Wiki</h1>
      <p className="text-fd-muted-foreground">Coming soon.</p>
      <p className="text-sm text-fd-muted-foreground">
        Browse the{' '}
        <Link href="/docs" className="font-medium underline">
          docs
        </Link>
        .
      </p>
    </div>
  );
}
