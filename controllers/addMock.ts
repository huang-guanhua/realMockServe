import mock from '../models/mock';

interface addData {
  path: string,
  method: string,
  mockData: any,
  name: string
}

interface findParam {
  path?: string,
  method?: string,
  size?: number,
  current?: number,
}

export async function find(param:findParam){
  let {size = 10, current = 1} = param;
  size = Number(size);
  current = Number(current);
  if(current <= 0 ) current = 1;
  const total = await mock.countDocuments({});
  const result = await mock.find({}, {__v:0})
  .skip((current - 1) * size)
  .limit(size)
  return {data:result,total,current,size}
}

export async function add(data:addData){
  const info:(addData | any) = {};
  const authPath = new RegExp('^\/');
  const isPath = authPath.test(data.path);
  if(!isPath){
    return Promise.reject('path error')
  };
  if(data.path && data.method){
    info.name = data.name || '';
    info.path = data.path;
    info.method = data.method && data.method.toLocaleUpperCase() || 'GET';
    info.mockData = data.mockData;
  }
  const total = await mock.countDocuments({});
  if(total > 1000){
    return Promise.reject('add quantity beyond limit')
  }
  const result = await mock.create(info)
  return result;
}

export async function deleteMock(id:string){
  if(!id) return Promise.reject('id error')
  const result = await mock.deleteOne({_id:id})
  return result;
}

export async function mockRouter(path:string, method:string){
  if(!path || !method){
    return Promise.reject('check params')
  }
  const params = {path,method:method.toLocaleUpperCase()};
  const result = await mock.findOne(params);
  return result;
}