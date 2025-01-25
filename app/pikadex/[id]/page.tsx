import PikadexEntryDetails from "@/components/PikadexEntryDetails"



const PikadexEntry = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params; // Await the params as it's treated as a Promiseßß

  return (
    <div className="h-screen flex justify-center items-center">
      <PikadexEntryDetails id={id} />
    </div>

  );
 
};


export default PikadexEntry;
