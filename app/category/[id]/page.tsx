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
  return <>{id}</>;
}
