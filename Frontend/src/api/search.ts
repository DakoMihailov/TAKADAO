import { IOption } from '@/interfaces'
import request from './request'

const search = {
  getSearchFields: (searchString: string) =>
    request.get<IOption[]>(`/search?query=${searchString}`),
}

export default search
