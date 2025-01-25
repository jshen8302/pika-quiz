
import PikadexEntryDetails from "@/components/PikadexEntryDetails";
import Modal from "@/components/Modal";


const PikadexEntryModal = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params; // Await the params as it's treated as a Promiseßß

  if (!id) {
    return (
      <Modal>
        <div>Error: No ID provided for this Pikadex entry.</div>
      </Modal>
    );
  }

  return (
    <Modal>
      <PikadexEntryDetails id={id} />
    </Modal>
  );
};

export default PikadexEntryModal;
