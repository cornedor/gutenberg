import { getFeatureFlag } from '../';

describe( 'getFeatureFlag', () => {
	it( 'returns false for an unknown feature flag', () => {
		const config = {
			featureFlags: {},
		};
		expect( getFeatureFlag( config, 'foo' ) ).toBe( false );
	} );

	it( 'returns the truthiness of the value set in the config for a known feature flag', () => {
		const config = {
			featureFlags: {
				foo: true,
				bar: false,
			},
		};
		expect( getFeatureFlag( config, 'foo' ) ).toBe( true );
		expect( getFeatureFlag( config, 'bar' ) ).toBe( false );
	} );
} );
