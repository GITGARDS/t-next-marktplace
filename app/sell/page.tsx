import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { TipTapEditor } from "../components/Editor";
import { SelectCategory } from "../components/SelectCategory";

export default function SellRoute() {
  return (
    <section className="max-w-7xl mx-auto px-4 md:px-8 mb-14">
      <Card>
        <form>
          <CardHeader>
            <CardTitle>Sell your product with ease</CardTitle>
            <CardDescription>
              Please describe your product here in detail so that it can be sold
            </CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col gap-y-10">
            <div className="flex flex-col space-y-2">
              <Label htmlFor="name">Name</Label>
              <Input id="name" placeholder="Name of your product" />
            </div>

            <div className="flex flex-col gap-y-2">
              <Label htmlFor="name">Category</Label>
              <SelectCategory />
            </div>

            <div className="flex flex-col gap-y-2">
              <Label htmlFor="name">Price</Label>
              <Input placeholder="29$" type="number" />
            </div>

            <div className="flex flex-col gap-y-2">
              <Label htmlFor="name">Small Summary</Label>
              <Textarea placeholder="Prease describe your product shortly right here...." />
            </div>

            <div className="flex flex-col gap-y-2">
              <label>Description</label>
              <TipTapEditor />
            </div>
          </CardContent>
        </form>
      </Card>
    </section>
  );
}
