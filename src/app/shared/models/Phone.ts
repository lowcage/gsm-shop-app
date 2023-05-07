export interface Phone {
  id: string;
  brand_name: string;
  model_name: string;
  body: {
    dimensions: string;
    weight: string;
  }
  display : {
    type: string;
    size: string;
  }
  platform: {
    os: string;
    chipset: string;
    cpu: string;
    gpu: string;
  }
  memory: string;
  battery: string;
  price: number;
  image_url: string;
  expanded?: boolean;
}
