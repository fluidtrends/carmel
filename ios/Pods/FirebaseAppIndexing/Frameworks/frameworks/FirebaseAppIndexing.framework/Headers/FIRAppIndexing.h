//
//  FirebaseAppIndexing
//  Firebase iOS SDK
//
//  Copyright 2015 Google Inc.
//

#import <UIKit/UIKit.h>

// This class is meant to register apps with Google for the purposes for App Indexing from
// Google Search.

@interface FIRAppIndexing : NSObject

/**
 * @method sharedInstance
 * @abstract Returns the singleton instance of FIRAppIndexing.
 * @return The shared instance of FIRAppIndexing.
 */
+ (instancetype)sharedInstance;

/**
 * @method registerApp
 * @abstract Registers an app with Google for App Indexing purposes.
 * @param iTunesID The iTunes ID of the app.
 */
- (void)registerApp:(NSUInteger)iTunesID;

@end
