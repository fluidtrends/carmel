package io.carmel;

import android.app.Application;

import com.facebook.react.ReactApplication;
import com.inprogress.reactnativeyoutube.ReactNativeYouTube;
import com.rnfs.RNFSPackage;
import fr.bamlab.rnimageresizer.ImageResizerPackage;
import com.imagepicker.ImagePickerPackage;
import com.audioStreaming.ReactNativeAudioStreamingPackage;
import com.zmxv.RNSound.RNSoundPackage;
import com.airbnb.android.react.maps.MapsPackage;
import com.cmcewen.blurview.BlurViewPackage;
import com.oblador.vectoricons.VectorIconsPackage;
import com.facebook.react.ReactNativeHost;
import com.facebook.react.ReactPackage;
import com.facebook.react.shell.MainReactPackage;
import com.facebook.soloader.SoLoader;
import com.devfd.RNGeocoder.RNGeocoderPackage;

import java.util.Arrays;
import java.util.List;

import io.invertase.firebase.RNFirebasePackage;

public class MainApplication extends Application implements ReactApplication {

  private final ReactNativeHost mReactNativeHost = new ReactNativeHost(this) {
    @Override
    public boolean getUseDeveloperSupport() {
      return BuildConfig.DEBUG;
    }

    @Override
    protected List<ReactPackage> getPackages() {
      return Arrays.<ReactPackage>asList(
          new MainReactPackage(),
            new ReactNativeYouTube(),
            new RNFSPackage(),
            new ImageResizerPackage(),
            new ImagePickerPackage(),
            new ReactNativeAudioStreamingPackage(),
            new RNSoundPackage(),
            new MapsPackage(),
            new RNGeocoderPackage(),
            new BlurViewPackage(),
            new RNFirebasePackage(),
            new VectorIconsPackage()
      );
    }
  };

  @Override
  public ReactNativeHost getReactNativeHost() {
    return mReactNativeHost;
  }

  @Override
  public void onCreate() {
    super.onCreate();
    SoLoader.init(this, /* native exopackage */ false);
  }
}
