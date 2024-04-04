import { create } from "zustand";

interface InitialState {
  ip: string;
  location: {
    city: string;
    region: string;
    lat: number | null;
    lng: number | null;
    timezone: string;
  };
  isp: string;
}

interface Actions {
  setData: (data: InitialState) => void;
}

const initialState: InitialState = {
  ip: "",
  location: {
    city: "",
    region: "",
    lat: null,
    lng: null,
    timezone: "",
  },
  isp: "",
};

export const useLocation = create<InitialState & Actions>((set) => ({
  ...initialState,
  setData: (data) => {
    const { ip, location, isp } = data;
    set((state) => ({
      ...state,
      ip: ip,
      location: {
        city: location.city,
        region: location.region,
        lat: location.lat,
        lng: location.lng,
        timezone: location.timezone,
      },
      isp: isp,
    }));
  },
}));
