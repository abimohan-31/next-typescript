import { Button } from "@/components/ui/button";

export default function UserListView() {
  return (
    <div>
      <h1>User List View </h1>
      <Button>Click</Button>{""}
      <Button variant="outline" size="lg">Click</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="destructive" size="icon-lg">
        Destructive
      </Button>
      <Button variant="link" size="lg">
        Link
      </Button>
    </div>
  );
}
