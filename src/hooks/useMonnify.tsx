import { useCallback } from 'react';
import {
  CompleteResponesProps,
  MonnifyProps,
  UserCancelledResponseProps,
  usePayWithMonnifyPayment,
} from 'react-monnify-ts';

const useMonnify = (config: MonnifyProps) => {
 
  const initializePayment = usePayWithMonnifyPayment(config);

  const startPayment = useCallback(
    (
      onLoadStart: () => void,
      onLoadComplete: () => void,
      onComplete: (res: CompleteResponesProps) => void,
      onClose: (data: UserCancelledResponseProps) => void
    ) => {
      initializePayment(onLoadStart, onLoadComplete, onComplete, onClose);
    },
    [initializePayment]
  );

  return { startPayment };
};

export default useMonnify;
