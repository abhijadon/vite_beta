import useFetch from '@/hooks/useFetch';
import { request } from '@/request';

const PreviewCard = () => {
  const { result: universityData, isLoading: paymentLoading, error } = useFetch(() =>
    request.summary({ entity: 'payment' })
  )

  if (error) {
    console.error("Error loading data:", error); // Log the error to the console
    return <div>Error loading data</div>;
  }

  if (paymentLoading || !universityData || !universityData.result) {
    return <div>Loading...</div>;
  }

  const count = universityData.result[0].count;

  return (
    <div>
      <div>
        Preview card {count}
      </div>
    </div>
  );
};

export default PreviewCard;
