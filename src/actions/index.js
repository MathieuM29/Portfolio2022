export const LOAD_DATAS = 'LOAD_DATAS';
export const RECEIVED_DATAS = 'RECEIVED_DATAS';

export const loadDatas = () => ({
  type: LOAD_DATAS,
});

export const receivedDatas = (payload) => ({
  type: RECEIVED_DATAS,
  payload,
});


