import {
    parseCreationOptionsFromJSON,
    create,
    get,
    parseRequestOptionsFromJSON,
    supported,
    AuthenticationPublicKeyCredential,
} from "@github/webauthn-json/browser-ponyfill";

export default function (){
    console.log('navigator',navigator)
    console.log('window.PublicKeyCredential',window.PublicKeyCredential)
    return (
        <div>{`${supported()}`}</div>
    )
}
