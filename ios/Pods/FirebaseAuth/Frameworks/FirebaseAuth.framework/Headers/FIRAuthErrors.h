/** @file FIRAuthErrors.h
    @brief Firebase Auth SDK
    @copyright Copyright 2015 Google Inc.
    @remarks Use of this SDK is subject to the Google APIs Terms of Service:
        https://developers.google.com/terms/
 */

#import <Foundation/Foundation.h>

/** @class FIRAuthErrors
    @remarks Error Codes common to all API Methods:
    <ul>
        <li>@c FIRAuthErrorCodeNetworkError</li>
        <li>@c FIRAuthErrorCodeUserNotFound</li>
        <li>@c FIRAuthErrorCodeUserTokenExpired</li>
        <li>@c FIRAuthErrorCodeTooManyRequests</li>
        <li>@c FIRAuthErrorCodeInvalidAPIKey</li>
        <li>@c FIRAuthErrorCodeAppNotAuthorized</li>
        <li>@c FIRAuthErrorCodeKeychainError</li>
        <li>@c FIRAuthErrorCodeInternalError</li>
    </ul>
    @remarks Common error codes for @c FIRUser operations:
    <ul>
        <li>@c FIRAuthErrorCodeInvalidUserToken</li>
        <li>@c FIRAuthErrorCodeUserDisabled</li>
    </ul>
 */
@interface FIRAuthErrors

/**
    @brief The Firebase Auth error domain.
 */
extern NSString *const FIRAuthErrorDomain;

/**
    @brief The name of the key for the "error_name" string in the NSError userinfo dictionary.
 */
extern NSString *const FIRAuthErrorNameKey;

/**
    @brief Error codes used by Firebase Auth.
 */
typedef NS_ENUM(NSInteger, FIRAuthErrorCode) {
    /** Indicates a validation error with the custom token.
     */
    FIRAuthErrorCodeInvalidCustomToken = 17000,

    /** Indicates the service account and the API key belong to different projects.
     */
    FIRAuthErrorCodeCustomTokenMismatch = 17002,

    /** Indicates the IDP token or requestUri is invalid.
     */
    FIRAuthErrorCodeInvalidCredential = 17004,

    /** Indicates the user's account is disabled on the server.
     */
    FIRAuthErrorCodeUserDisabled = 17005,

    /** Indicates the administrator disabled sign in with the specified identity provider.
     */
    FIRAuthErrorCodeOperationNotAllowed = 17006,

    /** Indicates the email used to attempt a sign up is already in use.
     */
    FIRAuthErrorCodeEmailAlreadyInUse = 17007,

    /** Indicates the email is invalid.
     */
    FIRAuthErrorCodeInvalidEmail = 17008,

    /** Indicates the user attempted sign in with a wrong password.
     */
    FIRAuthErrorCodeWrongPassword = 17009,

    /** Indicates that too many requests were made to a server method.
     */
    FIRAuthErrorCodeTooManyRequests = 17010,

    /** Indicates the user account was not found.
     */
    FIRAuthErrorCodeUserNotFound = 17011,

    /** Indicates account linking is required.
     */
    FIRAuthErrorCodeAccountExistsWithDifferentCredential = 17012,

    /** Same enum as @c FIRAuthErrorCodeAccountExistsWithDifferentCredential ,
        but with incorrect spelling. Only exists for backwards compatiblity.
     */
    FIRAuthErrrorCodeAccountExistsWithDifferentCredential = 17012,

    /** Indicates the user has attemped to change email or password more than 5 minutes after
        signing in.
     */
    FIRAuthErrorCodeRequiresRecentLogin = 17014,

    /** Indicates an attempt to link a provider to which the account is already linked.
     */
    FIRAuthErrorCodeProviderAlreadyLinked = 17015,

    /** Indicates an attempt to unlink a provider that is not linked.
     */
    FIRAuthErrorCodeNoSuchProvider = 17016,

    /** Indicates user's saved auth credential is invalid, the user needs to sign in again.
     */
    FIRAuthErrorCodeInvalidUserToken = 17017,

    /** Indicates a network error occurred (such as a timeout, interrupted connection, or
        unreachable host). These types of errors are often recoverable with a retry. The @c
        NSUnderlyingError field in the @c NSError.userInfo dictionary will contain the error
        encountered.
     */
    FIRAuthErrorCodeNetworkError = 17020,

    /** Indicates the saved token has expired, for example, the user may have changed account
        password on another device. The user needs to sign in again on the device that made this
        request.
     */
    FIRAuthErrorCodeUserTokenExpired = 17021,

    /** Indicates an invalid API key was supplied in the request.
     */
    FIRAuthErrorCodeInvalidAPIKey = 17023,

    /** Indicates that an attempt was made to reauthenticate with a user which is not the current
        user.
     */
    FIRAuthErrorCodeUserMismatch = 17024,

    /** Indicates an attempt to link with a credential that has already been linked with a
        different Firebase account
     */
    FIRAuthErrorCodeCredentialAlreadyInUse = 17025,

    /** Indicates an attempt to set a password that is considered too weak.
     */
    FIRAuthErrorCodeWeakPassword = 17026,

    /** Indicates the App is not authorized to use Firebase Authentication with the
        provided API Key.
     */
    FIRAuthErrorCodeAppNotAuthorized = 17028,

    /** Indicates the OOB code is expired.
     */
    FIRAuthErrorCodeExpiredActionCode = 17029,

    /** Indicates the OOB code is invalid.
     */
    FIRAuthErrorCodeInvalidActionCode = 17030,

    /** Indicates that there are invalid parameters in the payload during a "send password reset
     *  email" attempt.
     */
    FIRAuthErrorCodeInvalidMessagePayload = 17031,

    /** Indicates that the sender email is invalid during a "send password reset email" attempt.
     */
    FIRAuthErrorCodeInvalidSender = 17032,

    /** Indicates that the recipient email is invalid.
     */
    FIRAuthErrorCodeInvalidRecipientEmail = 17033,

    /** Indicates an error occurred while attempting to access the keychain.
     */
    FIRAuthErrorCodeKeychainError = 17995,

    /** Indicates an internal error occurred.
     */
    FIRAuthErrorCodeInternalError = 17999,
};

@end
