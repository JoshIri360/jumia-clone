import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export function generateStaticParams() {
  return [
    { id: "exercise-and-fitness" },
    { id: "electronics" },
    { id: "lingerie" },
    { id: "clothing" },
    { id: "kids-fashion" },
    { id: "home-decor" },
    { id: "shoes" },
    { id: "sportswear" },
    { id: "watches" },
    { id: "yoga" },
    { id: "home-entertainment" },
    { id: "heating-cooling-appliances" },
    { id: "school-bags" },
    { id: "furniture" },
    { id: "washing-machines" },
  ];
}

export default function Page({ params }: { params: { id: string } }) {
  const { id } = params;
  return (
    <div className="bg-secondary w-full min-h-[90vh] flex items-center flex-col">
      <div className="responsive-width z-0 text-sm my-3">Home &gt; {id}</div>
      <div className="responsive-width z-0 bg-background flex-1 rounded-2xl overflow-hidden">
        <div className="bg-background flex justify-between items-center px-10 py-3 border-b border-secondary">
          <p className="text-2xl font-semibold">Exercise & Fitness</p>
          <div>
            <Select>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Select a fruit" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Fruits</SelectLabel>
                  <SelectItem value="apple">Apple</SelectItem>
                  <SelectItem value="banana">Banana</SelectItem>
                  <SelectItem value="blueberry">Blueberry</SelectItem>
                  <SelectItem value="grapes">Grapes</SelectItem>
                  <SelectItem value="pineapple">Pineapple</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>
    </div>
  );
}
