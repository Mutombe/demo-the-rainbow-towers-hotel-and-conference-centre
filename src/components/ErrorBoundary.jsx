import React from 'react';

export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, info) {
    // eslint-disable-next-line no-console
    console.error('Rainbow Towers error boundary:', error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-[70vh] flex items-center justify-center px-6 bg-ivory-50">
          <div className="text-center max-w-md">
            <p className="font-accent text-2xl text-sun-500">a quiet pause</p>
            <h1 className="mt-2 font-display text-4xl text-navy-800">
              Our lights flickered for a moment.
            </h1>
            <p className="mt-4 text-ink-400 text-sm">
              Please refresh the page — or reach our reception if the trouble
              lingers. We'll have it right in a moment.
            </p>
            <div className="mt-8 flex items-center justify-center gap-3">
              <button
                onClick={() => window.location.reload()}
                className="px-6 py-3 bg-navy-800 text-ivory-50 text-xs tracking-[0.14em] uppercase hover:bg-sun-500"
              >
                Refresh
              </button>
              <a
                href="/"
                className="px-6 py-3 border border-navy-800 text-navy-800 text-xs tracking-[0.14em] uppercase hover:bg-navy-800 hover:text-ivory-50 transition-colors"
              >
                Return home
              </a>
            </div>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}
