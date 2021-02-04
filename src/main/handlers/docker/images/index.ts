import docker from '../client';
import { ImageInfo } from 'dockerode';
import got from 'got';

const api = got.extend({
  prefixUrl: 'https://hub.docker.com/api/content/v1',
  responseType: 'json',
});

interface SearchImageInfo {
  id: string;
  name: string;
  description: string;
}

export default {
  getExistingImages: (): Promise<ImageInfo[] | []> => {
    return docker.listImages({ all: true });
  },
  searchImages: async (term: string, page: 1): Promise<any> => {
    const { body } = await api.get('products/search', {
      searchParams: {
        q: term,
        page_size: 25,
        type: 'image',
        page,
      },
    });
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    docker
      .searchImages({
        term: 'oryx-node',
      })
      .then((r2) => {
        console.log(r2.length);
      });
    return body;
  },
};
