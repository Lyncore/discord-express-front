import { useCallback, useState } from "react";
import { OAuth2Props } from "./oauth2.props";

export default function useOAuth2(props: OAuth2Props){
    const [{ loading, error }, setUI] = useState({ loading: false, error: null });
   /* const getAuth = useCallback(() => {
        // 1. Init
        setUI({
          loading: true,
          error: null,
        });
    })*/
}