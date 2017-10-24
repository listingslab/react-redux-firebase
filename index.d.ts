// import * as firebase from 'firebase/app.d'
/** Declaration file generated by dts-gen */

export const actionTypes: {
    AUTHENTICATION_INIT_FINISHED: string;
    AUTHENTICATION_INIT_STARTED: string;
    AUTH_UPDATE_ERROR: string;
    AUTH_UPDATE_START: string;
    AUTH_UPDATE_SUCCESS: string;
    EMAIL_UPDATE_ERROR: string;
    EMAIL_UPDATE_START: string;
    EMAIL_UPDATE_SUCCESS: string;
    ERROR: string;
    FILE_DELETE_COMPLETE: string;
    FILE_DELETE_ERROR: string;
    FILE_DELETE_START: string;
    FILE_UPLOAD_COMPLETE: string;
    FILE_UPLOAD_ERROR: string;
    FILE_UPLOAD_PROGRESS: string;
    FILE_UPLOAD_START: string;
    LOGIN: string;
    LOGIN_ERROR: string;
    LOGOUT: string;
    NO_VALUE: string;
    PROFILE_UPDATE_ERROR: string;
    PROFILE_UPDATE_START: string;
    PROFILE_UPDATE_SUCCESS: string;
    SET: string;
    SET_PROFILE: string;
    START: string;
    UNAUTHORIZED_ERROR: string;
    UNSET_LISTENER: string;
};

export const constants: {
    actionTypes: {
        AUTHENTICATION_INIT_FINISHED: string;
        AUTHENTICATION_INIT_STARTED: string;
        AUTH_UPDATE_ERROR: string;
        AUTH_UPDATE_START: string;
        AUTH_UPDATE_SUCCESS: string;
        EMAIL_UPDATE_ERROR: string;
        EMAIL_UPDATE_START: string;
        EMAIL_UPDATE_SUCCESS: string;
        ERROR: string;
        FILE_DELETE_COMPLETE: string;
        FILE_DELETE_ERROR: string;
        FILE_DELETE_START: string;
        FILE_UPLOAD_COMPLETE: string;
        FILE_UPLOAD_ERROR: string;
        FILE_UPLOAD_PROGRESS: string;
        FILE_UPLOAD_START: string;
        LOGIN: string;
        LOGIN_ERROR: string;
        LOGOUT: string;
        NO_VALUE: string;
        PROFILE_UPDATE_ERROR: string;
        PROFILE_UPDATE_START: string;
        PROFILE_UPDATE_SUCCESS: string;
        SET: string;
        SET_PROFILE: string;
        START: string;
        UNAUTHORIZED_ERROR: string;
        UNSET_LISTENER: string;
    };
    defaultConfig: ReduxFirebaseConfig;
};

/**
 * Object whose values correspond to different reducer functions.
 */
export interface ReduxFirebaseConfig {
  autoPopulateProfile: boolean;
  dispatchOnUnsetListener: boolean;
  enableEmptyAuthChanges: boolean;
  enableLogging: boolean;
  enableRedirectHandling: boolean;
  setProfilePopulateResults: boolean;
  updateProfileOnLogin: boolean;
  userProfile: string;
}

export interface listenerConfigFunc {
  (): string[] | object[]
}

export interface FirebaseInstance {

}

/**
 * React HOC that attaches/detaches listeners on mount/unmount.
 */
export function firebaseConnect(...args: any[]): any;

/**
 * Reducer for Firebase state
 */
export function firebaseStateReducer(state: object, action : object): object;

export function getFirebase(): object;

export function isEmpty(...args: any[]): boolean;

/**
 * Checks whether or not data is empty
 */
export function isLoaded(...args: any[]): boolean;

export function ordered(firebaseState: object, path: string, notSetValue: any): any;

export function populate(firebaseState: object, path: string, populates: object[], notSetValue: any): any;

/**
 * Redux store enhancer that adds store.firebase (for use with firebaseConnect)
 */
export function reactReduxFirebase(fbInstance: FirebaseInstance, config: ReduxFirebaseConfig): object;

export function reduxFirebase(fbInstance: FirebaseInstance, config: ReduxFirebaseConfig): object;

export function reduxReactFirebase(fbInstance: FirebaseInstance, config: ReduxFirebaseConfig): object;

export namespace firebaseConnect {
    const prototype: {
    };

}

export namespace firebaseStateReducer {
    const prototype: {
    };

}

export namespace getFirebase {
    const prototype: {
    };

}

/**
 * Checks whether or not data is empty
 */
export namespace isEmpty {
    const prototype: {
    };

}

/**
 * Checks whether or not data has been loaded
 */
export namespace isLoaded {
    const prototype: {
    };

}

export namespace reactReduxFirebase {
    const prototype: {
    };

}

export namespace reduxFirebase {
    const prototype: {
    };

}

export namespace helpers {
    function isEmpty(data: any): any;

    function isLoaded(...args: any[]): any;

    function ordered(data: any, path: any, notSetValue: any): any;

    function populate(data: any, path: any, populates: any, notSetValue: any): any;

    namespace isEmpty {
        const prototype: {
        };

    }

    namespace isLoaded {
        const prototype: {
        };

    }
}