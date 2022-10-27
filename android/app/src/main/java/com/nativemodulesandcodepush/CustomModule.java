package com.nativemodulesandcodepush;

import android.provider.Settings;
import android.widget.Toast;

import androidx.annotation.NonNull;

import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

public class CustomModule extends ReactContextBaseJavaModule {
    private static ReactApplicationContext reactContext;
    CustomModule(ReactApplicationContext reactApplicationContext){
        super(reactApplicationContext);
        reactContext = reactApplicationContext;
    }
    @ReactMethod
    public void showToast(){
        Toast.makeText(reactContext, "Native Module Android Toast",Toast.LENGTH_LONG).show();
    }
    @ReactMethod void getDeviceID(Promise promise){
        try{
            String android_id = Settings.Secure.getString(reactContext.getContentResolver(),Settings.Secure.ANDROID_ID);
            promise.resolve(android_id);
        }catch (Exception e){
            promise.reject("Error getting Device ID ",e);
        }
    }
    @NonNull
    @Override
    public String getName() {
        return "customModule";
    }
}
