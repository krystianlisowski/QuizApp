package com.quiz;

import com.facebook.react.ReactNativeHost;
import com.facebook.react.ReactPackage;
import com.facebook.react.shell.MainReactPackage;
import com.reactnativenavigation.NavigationApplication;
import com.reactnativenavigation.react.NavigationReactNativeHost;
import com.reactnativenavigation.react.ReactGateway;

import org.devio.rn.splashscreen.SplashScreenReactPackage;

import java.util.Arrays;
import java.util.List;
import org.pgsqlite.SQLitePluginPackage;

public class MainApplication extends NavigationApplication {

    @Override
    public boolean isDebug()
    {
        // Make sure you are using BuildConfig from your own application
        return BuildConfig.DEBUG;
    }

    @Override
    protected ReactGateway createReactGateway()
    {
        ReactNativeHost host = new NavigationReactNativeHost(this, isDebug(), createAdditionalReactPackages()) {
            @Override
            protected String getJSMainModuleName()
            {
                return "index";
            }
        };
        return new ReactGateway(this, isDebug(), host);
    }

    protected List<ReactPackage> getPackages()
    {
        // Add additional packages you require here
        // No need to add RnnPackage and MainReactPackage
        return Arrays.<ReactPackage>asList(
                new SQLitePluginPackage()
        );
    }

    @Override
    public List<ReactPackage> createAdditionalReactPackages()
    {
        return getPackages();
    }
}