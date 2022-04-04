// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"kn9T2":[function(require,module,exports) {
var Refresh = require('react-refresh/runtime');
Refresh.injectIntoGlobalHook(window);
window.$RefreshReg$ = function() {};
window.$RefreshSig$ = function() {
    return function(type) {
        return type;
    };
};

},{"react-refresh/runtime":"786KC"}],"786KC":[function(require,module,exports) {
'use strict';
module.exports = require('./cjs/react-refresh-runtime.development.js');

},{"./cjs/react-refresh-runtime.development.js":"hdge7"}],"hdge7":[function(require,module,exports) {
/** @license React v0.9.0
 * react-refresh-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 'use strict';
(function() {
    // ATTENTION
    // When adding new symbols to this file,
    // Please consider also adding to 'react-devtools-shared/src/backend/ReactSymbols'
    // The Symbol used to tag the ReactElement-like types. If there is no native Symbol
    // nor polyfill, then a plain number is used for performance.
    var REACT_ELEMENT_TYPE = 60103;
    var REACT_PORTAL_TYPE = 60106;
    var REACT_FRAGMENT_TYPE = 60107;
    var REACT_STRICT_MODE_TYPE = 60108;
    var REACT_PROFILER_TYPE = 60114;
    var REACT_PROVIDER_TYPE = 60109;
    var REACT_CONTEXT_TYPE = 60110;
    var REACT_FORWARD_REF_TYPE = 60112;
    var REACT_SUSPENSE_TYPE = 60113;
    var REACT_SUSPENSE_LIST_TYPE = 60120;
    var REACT_MEMO_TYPE = 60115;
    var REACT_LAZY_TYPE = 60116;
    var REACT_BLOCK_TYPE = 60121;
    var REACT_SERVER_BLOCK_TYPE = 60122;
    var REACT_FUNDAMENTAL_TYPE = 60117;
    var REACT_SCOPE_TYPE = 60119;
    var REACT_OPAQUE_ID_TYPE = 60128;
    var REACT_DEBUG_TRACING_MODE_TYPE = 60129;
    var REACT_OFFSCREEN_TYPE = 60130;
    var REACT_LEGACY_HIDDEN_TYPE = 60131;
    if (typeof Symbol === 'function' && Symbol.for) {
        var symbolFor = Symbol.for;
        REACT_ELEMENT_TYPE = symbolFor('react.element');
        REACT_PORTAL_TYPE = symbolFor('react.portal');
        REACT_FRAGMENT_TYPE = symbolFor('react.fragment');
        REACT_STRICT_MODE_TYPE = symbolFor('react.strict_mode');
        REACT_PROFILER_TYPE = symbolFor('react.profiler');
        REACT_PROVIDER_TYPE = symbolFor('react.provider');
        REACT_CONTEXT_TYPE = symbolFor('react.context');
        REACT_FORWARD_REF_TYPE = symbolFor('react.forward_ref');
        REACT_SUSPENSE_TYPE = symbolFor('react.suspense');
        REACT_SUSPENSE_LIST_TYPE = symbolFor('react.suspense_list');
        REACT_MEMO_TYPE = symbolFor('react.memo');
        REACT_LAZY_TYPE = symbolFor('react.lazy');
        REACT_BLOCK_TYPE = symbolFor('react.block');
        REACT_SERVER_BLOCK_TYPE = symbolFor('react.server.block');
        REACT_FUNDAMENTAL_TYPE = symbolFor('react.fundamental');
        REACT_SCOPE_TYPE = symbolFor('react.scope');
        REACT_OPAQUE_ID_TYPE = symbolFor('react.opaque.id');
        REACT_DEBUG_TRACING_MODE_TYPE = symbolFor('react.debug_trace_mode');
        REACT_OFFSCREEN_TYPE = symbolFor('react.offscreen');
        REACT_LEGACY_HIDDEN_TYPE = symbolFor('react.legacy_hidden');
    }
    var PossiblyWeakMap = typeof WeakMap === 'function' ? WeakMap : Map; // We never remove these associations.
    // It's OK to reference families, but use WeakMap/Set for types.
    var allFamiliesByID = new Map();
    var allFamiliesByType = new PossiblyWeakMap();
    var allSignaturesByType = new PossiblyWeakMap(); // This WeakMap is read by React, so we only put families
    // that have actually been edited here. This keeps checks fast.
    // $FlowIssue
    var updatedFamiliesByType = new PossiblyWeakMap(); // This is cleared on every performReactRefresh() call.
    // It is an array of [Family, NextType] tuples.
    var pendingUpdates = []; // This is injected by the renderer via DevTools global hook.
    var helpersByRendererID = new Map();
    var helpersByRoot = new Map(); // We keep track of mounted roots so we can schedule updates.
    var mountedRoots = new Set(); // If a root captures an error, we remember it so we can retry on edit.
    var failedRoots = new Set(); // In environments that support WeakMap, we also remember the last element for every root.
    // It needs to be weak because we do this even for roots that failed to mount.
    // If there is no WeakMap, we won't attempt to do retrying.
    // $FlowIssue
    var rootElements = typeof WeakMap === 'function' ? new WeakMap() : null;
    var isPerformingRefresh = false;
    function computeFullKey(signature) {
        if (signature.fullKey !== null) return signature.fullKey;
        var fullKey = signature.ownKey;
        var hooks;
        try {
            hooks = signature.getCustomHooks();
        } catch (err) {
            // This can happen in an edge case, e.g. if expression like Foo.useSomething
            // depends on Foo which is lazily initialized during rendering.
            // In that case just assume we'll have to remount.
            signature.forceReset = true;
            signature.fullKey = fullKey;
            return fullKey;
        }
        for(var i = 0; i < hooks.length; i++){
            var hook = hooks[i];
            if (typeof hook !== 'function') {
                // Something's wrong. Assume we need to remount.
                signature.forceReset = true;
                signature.fullKey = fullKey;
                return fullKey;
            }
            var nestedHookSignature = allSignaturesByType.get(hook);
            if (nestedHookSignature === undefined) continue;
            var nestedHookKey = computeFullKey(nestedHookSignature);
            if (nestedHookSignature.forceReset) signature.forceReset = true;
            fullKey += '\n---\n' + nestedHookKey;
        }
        signature.fullKey = fullKey;
        return fullKey;
    }
    function haveEqualSignatures(prevType, nextType) {
        var prevSignature = allSignaturesByType.get(prevType);
        var nextSignature = allSignaturesByType.get(nextType);
        if (prevSignature === undefined && nextSignature === undefined) return true;
        if (prevSignature === undefined || nextSignature === undefined) return false;
        if (computeFullKey(prevSignature) !== computeFullKey(nextSignature)) return false;
        if (nextSignature.forceReset) return false;
        return true;
    }
    function isReactClass(type) {
        return type.prototype && type.prototype.isReactComponent;
    }
    function canPreserveStateBetween(prevType, nextType) {
        if (isReactClass(prevType) || isReactClass(nextType)) return false;
        if (haveEqualSignatures(prevType, nextType)) return true;
        return false;
    }
    function resolveFamily(type) {
        // Only check updated types to keep lookups fast.
        return updatedFamiliesByType.get(type);
    } // If we didn't care about IE11, we could use new Map/Set(iterable).
    function cloneMap(map) {
        var clone = new Map();
        map.forEach(function(value, key) {
            clone.set(key, value);
        });
        return clone;
    }
    function cloneSet(set) {
        var clone = new Set();
        set.forEach(function(value) {
            clone.add(value);
        });
        return clone;
    }
    function performReactRefresh() {
        if (pendingUpdates.length === 0) return null;
        if (isPerformingRefresh) return null;
        isPerformingRefresh = true;
        try {
            var staleFamilies = new Set();
            var updatedFamilies = new Set();
            var updates = pendingUpdates;
            pendingUpdates = [];
            updates.forEach(function(_ref) {
                var family = _ref[0], nextType = _ref[1];
                // Now that we got a real edit, we can create associations
                // that will be read by the React reconciler.
                var prevType = family.current;
                updatedFamiliesByType.set(prevType, family);
                updatedFamiliesByType.set(nextType, family);
                family.current = nextType; // Determine whether this should be a re-render or a re-mount.
                if (canPreserveStateBetween(prevType, nextType)) updatedFamilies.add(family);
                else staleFamilies.add(family);
            }); // TODO: rename these fields to something more meaningful.
            var update = {
                updatedFamilies: updatedFamilies,
                // Families that will re-render preserving state
                staleFamilies: staleFamilies // Families that will be remounted
            };
            helpersByRendererID.forEach(function(helpers) {
                // Even if there are no roots, set the handler on first update.
                // This ensures that if *new* roots are mounted, they'll use the resolve handler.
                helpers.setRefreshHandler(resolveFamily);
            });
            var didError = false;
            var firstError = null; // We snapshot maps and sets that are mutated during commits.
            // If we don't do this, there is a risk they will be mutated while
            // we iterate over them. For example, trying to recover a failed root
            // may cause another root to be added to the failed list -- an infinite loop.
            var failedRootsSnapshot = cloneSet(failedRoots);
            var mountedRootsSnapshot = cloneSet(mountedRoots);
            var helpersByRootSnapshot = cloneMap(helpersByRoot);
            failedRootsSnapshot.forEach(function(root) {
                var helpers = helpersByRootSnapshot.get(root);
                if (helpers === undefined) throw new Error('Could not find helpers for a root. This is a bug in React Refresh.');
                failedRoots.has(root);
                if (rootElements === null) return;
                if (!rootElements.has(root)) return;
                var element = rootElements.get(root);
                try {
                    helpers.scheduleRoot(root, element);
                } catch (err) {
                    if (!didError) {
                        didError = true;
                        firstError = err;
                    } // Keep trying other roots.
                }
            });
            mountedRootsSnapshot.forEach(function(root) {
                var helpers = helpersByRootSnapshot.get(root);
                if (helpers === undefined) throw new Error('Could not find helpers for a root. This is a bug in React Refresh.');
                mountedRoots.has(root);
                try {
                    helpers.scheduleRefresh(root, update);
                } catch (err) {
                    if (!didError) {
                        didError = true;
                        firstError = err;
                    } // Keep trying other roots.
                }
            });
            if (didError) throw firstError;
            return update;
        } finally{
            isPerformingRefresh = false;
        }
    }
    function register(type, id) {
        if (type === null) return;
        if (typeof type !== 'function' && typeof type !== 'object') return;
         // This can happen in an edge case, e.g. if we register
        // return value of a HOC but it returns a cached component.
        // Ignore anything but the first registration for each type.
        if (allFamiliesByType.has(type)) return;
         // Create family or remember to update it.
        // None of this bookkeeping affects reconciliation
        // until the first performReactRefresh() call above.
        var family = allFamiliesByID.get(id);
        if (family === undefined) {
            family = {
                current: type
            };
            allFamiliesByID.set(id, family);
        } else pendingUpdates.push([
            family,
            type
        ]);
        allFamiliesByType.set(type, family); // Visit inner types because we might not have registered them.
        if (typeof type === 'object' && type !== null) switch(type.$$typeof){
            case REACT_FORWARD_REF_TYPE:
                register(type.render, id + '$render');
                break;
            case REACT_MEMO_TYPE:
                register(type.type, id + '$type');
                break;
        }
    }
    function setSignature(type, key) {
        var forceReset = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
        var getCustomHooks = arguments.length > 3 ? arguments[3] : undefined;
        allSignaturesByType.set(type, {
            forceReset: forceReset,
            ownKey: key,
            fullKey: null,
            getCustomHooks: getCustomHooks || function() {
                return [];
            }
        });
    } // This is lazily called during first render for a type.
    // It captures Hook list at that time so inline requires don't break comparisons.
    function collectCustomHooksForSignature(type) {
        var signature = allSignaturesByType.get(type);
        if (signature !== undefined) computeFullKey(signature);
    }
    function getFamilyByID(id) {
        return allFamiliesByID.get(id);
    }
    function getFamilyByType(type) {
        return allFamiliesByType.get(type);
    }
    function findAffectedHostInstances(families) {
        var affectedInstances = new Set();
        mountedRoots.forEach(function(root) {
            var helpers = helpersByRoot.get(root);
            if (helpers === undefined) throw new Error('Could not find helpers for a root. This is a bug in React Refresh.');
            var instancesForRoot = helpers.findHostInstancesForRefresh(root, families);
            instancesForRoot.forEach(function(inst) {
                affectedInstances.add(inst);
            });
        });
        return affectedInstances;
    }
    function injectIntoGlobalHook(globalObject) {
        // For React Native, the global hook will be set up by require('react-devtools-core').
        // That code will run before us. So we need to monkeypatch functions on existing hook.
        // For React Web, the global hook will be set up by the extension.
        // This will also run before us.
        var hook = globalObject.__REACT_DEVTOOLS_GLOBAL_HOOK__;
        if (hook === undefined) {
            // However, if there is no DevTools extension, we'll need to set up the global hook ourselves.
            // Note that in this case it's important that renderer code runs *after* this method call.
            // Otherwise, the renderer will think that there is no global hook, and won't do the injection.
            var nextID = 0;
            globalObject.__REACT_DEVTOOLS_GLOBAL_HOOK__ = hook = {
                renderers: new Map(),
                supportsFiber: true,
                inject: function(injected) {
                    return nextID++;
                },
                onScheduleFiberRoot: function(id, root, children) {},
                onCommitFiberRoot: function(id, root, maybePriorityLevel, didError) {},
                onCommitFiberUnmount: function() {}
            };
        } // Here, we just want to get a reference to scheduleRefresh.
        var oldInject = hook.inject;
        hook.inject = function(injected) {
            var id = oldInject.apply(this, arguments);
            if (typeof injected.scheduleRefresh === 'function' && typeof injected.setRefreshHandler === 'function') // This version supports React Refresh.
            helpersByRendererID.set(id, injected);
            return id;
        }; // Do the same for any already injected roots.
        // This is useful if ReactDOM has already been initialized.
        // https://github.com/facebook/react/issues/17626
        hook.renderers.forEach(function(injected, id) {
            if (typeof injected.scheduleRefresh === 'function' && typeof injected.setRefreshHandler === 'function') // This version supports React Refresh.
            helpersByRendererID.set(id, injected);
        }); // We also want to track currently mounted roots.
        var oldOnCommitFiberRoot = hook.onCommitFiberRoot;
        var oldOnScheduleFiberRoot = hook.onScheduleFiberRoot || function() {};
        hook.onScheduleFiberRoot = function(id, root, children) {
            if (!isPerformingRefresh) {
                // If it was intentionally scheduled, don't attempt to restore.
                // This includes intentionally scheduled unmounts.
                failedRoots.delete(root);
                if (rootElements !== null) rootElements.set(root, children);
            }
            return oldOnScheduleFiberRoot.apply(this, arguments);
        };
        hook.onCommitFiberRoot = function(id, root, maybePriorityLevel, didError) {
            var helpers = helpersByRendererID.get(id);
            if (helpers === undefined) return;
            helpersByRoot.set(root, helpers);
            var current = root.current;
            var alternate = current.alternate; // We need to determine whether this root has just (un)mounted.
            // This logic is copy-pasted from similar logic in the DevTools backend.
            // If this breaks with some refactoring, you'll want to update DevTools too.
            if (alternate !== null) {
                var wasMounted = alternate.memoizedState != null && alternate.memoizedState.element != null;
                var isMounted = current.memoizedState != null && current.memoizedState.element != null;
                if (!wasMounted && isMounted) {
                    // Mount a new root.
                    mountedRoots.add(root);
                    failedRoots.delete(root);
                } else if (wasMounted && isMounted) ;
                else if (wasMounted && !isMounted) {
                    // Unmount an existing root.
                    mountedRoots.delete(root);
                    if (didError) // We'll remount it on future edits.
                    failedRoots.add(root);
                    else helpersByRoot.delete(root);
                } else if (!wasMounted && !isMounted) {
                    if (didError) // We'll remount it on future edits.
                    failedRoots.add(root);
                }
            } else // Mount a new root.
            mountedRoots.add(root);
            return oldOnCommitFiberRoot.apply(this, arguments);
        };
    }
    function hasUnrecoverableErrors() {
        // TODO: delete this after removing dependency in RN.
        return false;
    } // Exposed for testing.
    function _getMountedRootCount() {
        return mountedRoots.size;
    } // This is a wrapper over more primitive functions for setting signature.
    // Signatures let us decide whether the Hook order has changed on refresh.
    //
    // This function is intended to be used as a transform target, e.g.:
    // var _s = createSignatureFunctionForTransform()
    //
    // function Hello() {
    //   const [foo, setFoo] = useState(0);
    //   const value = useCustomHook();
    //   _s(); /* Second call triggers collecting the custom Hook list.
    //          * This doesn't happen during the module evaluation because we
    //          * don't want to change the module order with inline requires.
    //          * Next calls are noops. */
    //   return <h1>Hi</h1>;
    // }
    //
    // /* First call specifies the signature: */
    // _s(
    //   Hello,
    //   'useState{[foo, setFoo]}(0)',
    //   () => [useCustomHook], /* Lazy to avoid triggering inline requires */
    // );
    function createSignatureFunctionForTransform() {
        // We'll fill in the signature in two steps.
        // First, we'll know the signature itself. This happens outside the component.
        // Then, we'll know the references to custom Hooks. This happens inside the component.
        // After that, the returned function will be a fast path no-op.
        var status = 'needsSignature';
        var savedType;
        var hasCustomHooks;
        return function(type, key, forceReset, getCustomHooks) {
            switch(status){
                case 'needsSignature':
                    if (type !== undefined) {
                        // If we received an argument, this is the initial registration call.
                        savedType = type;
                        hasCustomHooks = typeof getCustomHooks === 'function';
                        setSignature(type, key, forceReset, getCustomHooks); // The next call we expect is from inside a function, to fill in the custom Hooks.
                        status = 'needsCustomHooks';
                    }
                    break;
                case 'needsCustomHooks':
                    if (hasCustomHooks) collectCustomHooksForSignature(savedType);
                    status = 'resolved';
                    break;
            }
            return type;
        };
    }
    function isLikelyComponentType(type) {
        switch(typeof type){
            case 'function':
                // First, deal with classes.
                if (type.prototype != null) {
                    if (type.prototype.isReactComponent) // React class.
                    return true;
                    var ownNames = Object.getOwnPropertyNames(type.prototype);
                    if (ownNames.length > 1 || ownNames[0] !== 'constructor') // This looks like a class.
                    return false;
                     // eslint-disable-next-line no-proto
                    if (type.prototype.__proto__ !== Object.prototype) // It has a superclass.
                    return false;
                     // Pass through.
                // This looks like a regular function with empty prototype.
                } // For plain functions and arrows, use name as a heuristic.
                var name = type.name || type.displayName;
                return typeof name === 'string' && /^[A-Z]/.test(name);
            case 'object':
                if (type != null) switch(type.$$typeof){
                    case REACT_FORWARD_REF_TYPE:
                    case REACT_MEMO_TYPE:
                        // Definitely React components.
                        return true;
                    default:
                        return false;
                }
                return false;
            default:
                return false;
        }
    }
    exports._getMountedRootCount = _getMountedRootCount;
    exports.collectCustomHooksForSignature = collectCustomHooksForSignature;
    exports.createSignatureFunctionForTransform = createSignatureFunctionForTransform;
    exports.findAffectedHostInstances = findAffectedHostInstances;
    exports.getFamilyByID = getFamilyByID;
    exports.getFamilyByType = getFamilyByType;
    exports.hasUnrecoverableErrors = hasUnrecoverableErrors;
    exports.injectIntoGlobalHook = injectIntoGlobalHook;
    exports.isLikelyComponentType = isLikelyComponentType;
    exports.performReactRefresh = performReactRefresh;
    exports.register = register;
    exports.setSignature = setSignature;
})();

},{}],"kh26k":[function(require,module,exports) {
"use strict";
var HMR_HOST = null;
var HMR_PORT = 1234;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "8948b02d9a2722fe";
function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}
function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}
function _createForOfIteratorHelper(o, allowArrayLike) {
    var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
    if (!it) {
        if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
            if (it) o = it;
            var i = 0;
            var F = function F() {};
            return {
                s: F,
                n: function n() {
                    if (i >= o.length) return {
                        done: true
                    };
                    return {
                        done: false,
                        value: o[i++]
                    };
                },
                e: function e(_e) {
                    throw _e;
                },
                f: F
            };
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var normalCompletion = true, didErr = false, err;
    return {
        s: function s() {
            it = it.call(o);
        },
        n: function n() {
            var step = it.next();
            normalCompletion = step.done;
            return step;
        },
        e: function e(_e2) {
            didErr = true;
            err = _e2;
        },
        f: function f() {
            try {
                if (!normalCompletion && it.return != null) it.return();
            } finally{
                if (didErr) throw err;
            }
        }
    };
}
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function accept(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function dispose(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == 'https:' && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? 'wss' : 'ws';
    var ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/'); // $FlowFixMe
    ws.onmessage = function(event) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        acceptedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === 'update') {
            // Remove error overlay if there is one
            if (typeof document !== 'undefined') removeErrorOverlay();
            var assets = data.assets.filter(function(asset) {
                return asset.envHash === HMR_ENV_HASH;
            }); // Handle HMR Update
            var handled = assets.every(function(asset) {
                return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                assets.forEach(function(asset) {
                    hmrApply(module.bundle.root, asset);
                });
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else window.location.reload();
        }
        if (data.type === 'error') {
            // Log parcel errors to console
            var _iterator = _createForOfIteratorHelper(data.diagnostics.ansi), _step;
            try {
                for(_iterator.s(); !(_step = _iterator.n()).done;){
                    var ansiDiagnostic = _step.value;
                    var stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                    console.error('🚨 [parcel]: ' + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
                }
            } catch (err) {
                _iterator.e(err);
            } finally{
                _iterator.f();
            }
            if (typeof document !== 'undefined') {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn('[parcel] 🚨 Connection to the HMR server was lost');
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log('[parcel] ✨ Error resolved');
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    var errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    var _iterator2 = _createForOfIteratorHelper(diagnostics), _step2;
    try {
        for(_iterator2.s(); !(_step2 = _iterator2.n()).done;){
            var diagnostic = _step2.value;
            var stack = diagnostic.codeframe ? diagnostic.codeframe : diagnostic.stack;
            errorHTML += "\n      <div>\n        <div style=\"font-size: 18px; font-weight: bold; margin-top: 20px;\">\n          \uD83D\uDEA8 ".concat(diagnostic.message, "\n        </div>\n        <pre>").concat(stack, "</pre>\n        <div>\n          ").concat(diagnostic.hints.map(function(hint) {
                return '<div>💡 ' + hint + '</div>';
            }).join(''), "\n        </div>\n        ").concat(diagnostic.documentation ? "<div>\uD83D\uDCDD <a style=\"color: violet\" href=\"".concat(diagnostic.documentation, "\" target=\"_blank\">Learn more</a></div>") : '', "\n      </div>\n    ");
        }
    } catch (err) {
        _iterator2.e(err);
    } finally{
        _iterator2.f();
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute('href', link.getAttribute('href').split('?')[0] + '?' + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(window.location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') reloadCSS();
    else if (asset.type === 'js') {
        var deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                var oldDeps = modules[asset.id][1];
                for(var dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    var id = oldDeps[dep];
                    var parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            var fn = new Function('require', 'module', 'exports', asset.output);
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id1) {
    var modules = bundle.modules;
    if (!modules) return;
    if (modules[id1]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        var deps = modules[id1][1];
        var orphans = [];
        for(var dep in deps){
            var parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id1];
        delete bundle.cache[id1]; // Now delete the orphans.
        orphans.forEach(function(id) {
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id1);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    var parents = getParents(module.bundle.root, id);
    var accepted = false;
    while(parents.length > 0){
        var v = parents.shift();
        var a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            var p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push.apply(parents, _toConsumableArray(p));
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) return true;
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"3jHXO":[function(require,module,exports) {
var $parcel$ReactRefreshHelpers$383e = require("@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js");
var prevRefreshReg = window.$RefreshReg$;
var prevRefreshSig = window.$RefreshSig$;
$parcel$ReactRefreshHelpers$383e.prelude(module);

try {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _jsxDevRuntime = require("react/jsx-dev-runtime");
var _reactRouterDom = require("react-router-dom");
var _app = require("./App");
var _appDefault = parcelHelpers.interopDefault(_app);
var _testPage = require("./TestPage");
var _testPageDefault = parcelHelpers.interopDefault(_testPage);
var _testPage1 = require("./TestPage1");
var _testPage1Default = parcelHelpers.interopDefault(_testPage1);
const container = document.getElementById("app");
const root = createRoot(container);
//Nested routes are displayed with outlet tag
root.render(/*#__PURE__*/ _jsxDevRuntime.jsxDEV(_reactRouterDom.BrowserRouter, {
    children: /*#__PURE__*/ _jsxDevRuntime.jsxDEV(_reactRouterDom.Routes, {
        children: [
            /*#__PURE__*/ _jsxDevRuntime.jsxDEV(_reactRouterDom.Route, {
                path: "/",
                element: /*#__PURE__*/ _jsxDevRuntime.jsxDEV(_appDefault.default, {}, void 0, false, void 0, void 0),
                children: /*#__PURE__*/ _jsxDevRuntime.jsxDEV(_reactRouterDom.Route, {
                    path: "testpage1",
                    element: /*#__PURE__*/ _jsxDevRuntime.jsxDEV(_testPage1Default.default, {}, void 0, false, void 0, void 0)
                }, void 0, false, {
                    fileName: "static/react/index.js",
                    lineNumber: 13,
                    columnNumber: 17
                }, undefined)
            }, void 0, false, {
                fileName: "static/react/index.js",
                lineNumber: 12,
                columnNumber: 13
            }, undefined),
            /*#__PURE__*/ _jsxDevRuntime.jsxDEV(_reactRouterDom.Route, {
                path: "testpage",
                element: /*#__PURE__*/ _jsxDevRuntime.jsxDEV(_testPageDefault.default, {}, void 0, false, void 0, void 0)
            }, void 0, false, {
                fileName: "static/react/index.js",
                lineNumber: 15,
                columnNumber: 13
            }, undefined)
        ]
    }, void 0, true, {
        fileName: "static/react/index.js",
        lineNumber: 11,
        columnNumber: 9
    }, undefined)
}, void 0, false, {
    fileName: "static/react/index.js",
    lineNumber: 10,
    columnNumber: 5
}, undefined));

  $parcel$ReactRefreshHelpers$383e.postlude(module);
} finally {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
}
},{"react/jsx-dev-runtime":"iTorj","react-router-dom":"fdOAw","./App":"axUqr","./TestPage":"4ZYvD","./TestPage1":"3JPlB","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js":"km3Ru"}],"iTorj":[function(require,module,exports) {
'use strict';
module.exports = require('./cjs/react-jsx-dev-runtime.development.js');

},{"./cjs/react-jsx-dev-runtime.development.js":"48uCM"}],"48uCM":[function(require,module,exports) {
/** @license React v17.0.2
 * react-jsx-dev-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 'use strict';
(function() {
    var React = require('react');
    var _assign = require('object-assign');
    // ATTENTION
    // When adding new symbols to this file,
    // Please consider also adding to 'react-devtools-shared/src/backend/ReactSymbols'
    // The Symbol used to tag the ReactElement-like types. If there is no native Symbol
    // nor polyfill, then a plain number is used for performance.
    var REACT_ELEMENT_TYPE = 60103;
    var REACT_PORTAL_TYPE = 60106;
    exports.Fragment = 60107;
    var REACT_STRICT_MODE_TYPE = 60108;
    var REACT_PROFILER_TYPE = 60114;
    var REACT_PROVIDER_TYPE = 60109;
    var REACT_CONTEXT_TYPE = 60110;
    var REACT_FORWARD_REF_TYPE = 60112;
    var REACT_SUSPENSE_TYPE = 60113;
    var REACT_SUSPENSE_LIST_TYPE = 60120;
    var REACT_MEMO_TYPE = 60115;
    var REACT_LAZY_TYPE = 60116;
    var REACT_BLOCK_TYPE = 60121;
    var REACT_SERVER_BLOCK_TYPE = 60122;
    var REACT_FUNDAMENTAL_TYPE = 60117;
    var REACT_SCOPE_TYPE = 60119;
    var REACT_OPAQUE_ID_TYPE = 60128;
    var REACT_DEBUG_TRACING_MODE_TYPE = 60129;
    var REACT_OFFSCREEN_TYPE = 60130;
    var REACT_LEGACY_HIDDEN_TYPE = 60131;
    if (typeof Symbol === 'function' && Symbol.for) {
        var symbolFor = Symbol.for;
        REACT_ELEMENT_TYPE = symbolFor('react.element');
        REACT_PORTAL_TYPE = symbolFor('react.portal');
        exports.Fragment = symbolFor('react.fragment');
        REACT_STRICT_MODE_TYPE = symbolFor('react.strict_mode');
        REACT_PROFILER_TYPE = symbolFor('react.profiler');
        REACT_PROVIDER_TYPE = symbolFor('react.provider');
        REACT_CONTEXT_TYPE = symbolFor('react.context');
        REACT_FORWARD_REF_TYPE = symbolFor('react.forward_ref');
        REACT_SUSPENSE_TYPE = symbolFor('react.suspense');
        REACT_SUSPENSE_LIST_TYPE = symbolFor('react.suspense_list');
        REACT_MEMO_TYPE = symbolFor('react.memo');
        REACT_LAZY_TYPE = symbolFor('react.lazy');
        REACT_BLOCK_TYPE = symbolFor('react.block');
        REACT_SERVER_BLOCK_TYPE = symbolFor('react.server.block');
        REACT_FUNDAMENTAL_TYPE = symbolFor('react.fundamental');
        REACT_SCOPE_TYPE = symbolFor('react.scope');
        REACT_OPAQUE_ID_TYPE = symbolFor('react.opaque.id');
        REACT_DEBUG_TRACING_MODE_TYPE = symbolFor('react.debug_trace_mode');
        REACT_OFFSCREEN_TYPE = symbolFor('react.offscreen');
        REACT_LEGACY_HIDDEN_TYPE = symbolFor('react.legacy_hidden');
    }
    var MAYBE_ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
    var FAUX_ITERATOR_SYMBOL = '@@iterator';
    function getIteratorFn(maybeIterable) {
        if (maybeIterable === null || typeof maybeIterable !== 'object') return null;
        var maybeIterator = MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL];
        if (typeof maybeIterator === 'function') return maybeIterator;
        return null;
    }
    var ReactSharedInternals = React.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function error(format) {
        for(var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++)args[_key2 - 1] = arguments[_key2];
        printWarning('error', format, args);
    }
    function printWarning(level, format, args) {
        var ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;
        var stack = ReactDebugCurrentFrame.getStackAddendum();
        if (stack !== '') {
            format += '%s';
            args = args.concat([
                stack
            ]);
        }
        var argsWithFormat = args.map(function(item) {
            return '' + item;
        }); // Careful: RN currently depends on this prefix
        argsWithFormat.unshift('Warning: ' + format); // We intentionally don't use spread (or .apply) directly because it
        // breaks IE9: https://github.com/facebook/react/issues/13610
        // eslint-disable-next-line react-internal/no-production-logging
        Function.prototype.apply.call(console[level], console, argsWithFormat);
    }
    // Filter certain DOM attributes (e.g. src, href) if their values are empty strings.
    var enableScopeAPI = false; // Experimental Create Event Handle API.
    function isValidElementType(type) {
        if (typeof type === 'string' || typeof type === 'function') return true;
         // Note: typeof might be other than 'symbol' or 'number' (e.g. if it's a polyfill).
        if (type === exports.Fragment || type === REACT_PROFILER_TYPE || type === REACT_DEBUG_TRACING_MODE_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || type === REACT_LEGACY_HIDDEN_TYPE || enableScopeAPI) return true;
        if (typeof type === 'object' && type !== null) {
            if (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_BLOCK_TYPE || type[0] === REACT_SERVER_BLOCK_TYPE) return true;
        }
        return false;
    }
    function getWrappedName(outerType, innerType, wrapperName) {
        var functionName = innerType.displayName || innerType.name || '';
        return outerType.displayName || (functionName !== '' ? wrapperName + "(" + functionName + ")" : wrapperName);
    }
    function getContextName(type) {
        return type.displayName || 'Context';
    }
    function getComponentName(type) {
        if (type == null) // Host root, text node or just invalid type.
        return null;
        if (typeof type.tag === 'number') error("Received an unexpected object in getComponentName(). This is likely a bug in React. Please file an issue.");
        if (typeof type === 'function') return type.displayName || type.name || null;
        if (typeof type === 'string') return type;
        switch(type){
            case exports.Fragment:
                return 'Fragment';
            case REACT_PORTAL_TYPE:
                return 'Portal';
            case REACT_PROFILER_TYPE:
                return 'Profiler';
            case REACT_STRICT_MODE_TYPE:
                return 'StrictMode';
            case REACT_SUSPENSE_TYPE:
                return 'Suspense';
            case REACT_SUSPENSE_LIST_TYPE:
                return 'SuspenseList';
        }
        if (typeof type === 'object') switch(type.$$typeof){
            case REACT_CONTEXT_TYPE:
                var context = type;
                return getContextName(context) + '.Consumer';
            case REACT_PROVIDER_TYPE:
                var provider = type;
                return getContextName(provider._context) + '.Provider';
            case REACT_FORWARD_REF_TYPE:
                return getWrappedName(type, type.render, 'ForwardRef');
            case REACT_MEMO_TYPE:
                return getComponentName(type.type);
            case REACT_BLOCK_TYPE:
                return getComponentName(type._render);
            case REACT_LAZY_TYPE:
                var lazyComponent = type;
                var payload = lazyComponent._payload;
                var init = lazyComponent._init;
                try {
                    return getComponentName(init(payload));
                } catch (x) {
                    return null;
                }
        }
        return null;
    }
    // Helpers to patch console.logs to avoid logging during side-effect free
    // replaying on render function. This currently only patches the object
    // lazily which won't cover if the log function was extracted eagerly.
    // We could also eagerly patch the method.
    var disabledDepth = 0;
    var prevLog;
    var prevInfo;
    var prevWarn;
    var prevError;
    var prevGroup;
    var prevGroupCollapsed;
    var prevGroupEnd;
    function disabledLog() {}
    disabledLog.__reactDisabledLog = true;
    function disableLogs() {
        if (disabledDepth === 0) {
            /* eslint-disable react-internal/no-production-logging */ prevLog = console.log;
            prevInfo = console.info;
            prevWarn = console.warn;
            prevError = console.error;
            prevGroup = console.group;
            prevGroupCollapsed = console.groupCollapsed;
            prevGroupEnd = console.groupEnd; // https://github.com/facebook/react/issues/19099
            var props = {
                configurable: true,
                enumerable: true,
                value: disabledLog,
                writable: true
            }; // $FlowFixMe Flow thinks console is immutable.
            Object.defineProperties(console, {
                info: props,
                log: props,
                warn: props,
                error: props,
                group: props,
                groupCollapsed: props,
                groupEnd: props
            });
        /* eslint-enable react-internal/no-production-logging */ }
        disabledDepth++;
    }
    function reenableLogs() {
        disabledDepth--;
        if (disabledDepth === 0) {
            /* eslint-disable react-internal/no-production-logging */ var props = {
                configurable: true,
                enumerable: true,
                writable: true
            }; // $FlowFixMe Flow thinks console is immutable.
            Object.defineProperties(console, {
                log: _assign({}, props, {
                    value: prevLog
                }),
                info: _assign({}, props, {
                    value: prevInfo
                }),
                warn: _assign({}, props, {
                    value: prevWarn
                }),
                error: _assign({}, props, {
                    value: prevError
                }),
                group: _assign({}, props, {
                    value: prevGroup
                }),
                groupCollapsed: _assign({}, props, {
                    value: prevGroupCollapsed
                }),
                groupEnd: _assign({}, props, {
                    value: prevGroupEnd
                })
            });
        /* eslint-enable react-internal/no-production-logging */ }
        if (disabledDepth < 0) error("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
    }
    var ReactCurrentDispatcher = ReactSharedInternals.ReactCurrentDispatcher;
    var prefix;
    function describeBuiltInComponentFrame(name, source, ownerFn) {
        if (prefix === undefined) // Extract the VM specific prefix used by each line.
        try {
            throw Error();
        } catch (x) {
            var match = x.stack.trim().match(/\n( *(at )?)/);
            prefix = match && match[1] || '';
        }
         // We use the prefix to ensure our stacks line up with native stack frames.
        return '\n' + prefix + name;
    }
    var reentry = false;
    var componentFrameCache;
    var PossiblyWeakMap = typeof WeakMap === 'function' ? WeakMap : Map;
    componentFrameCache = new PossiblyWeakMap();
    function describeNativeComponentFrame(fn, construct) {
        // If something asked for a stack inside a fake render, it should get ignored.
        if (!fn || reentry) return '';
        var frame = componentFrameCache.get(fn);
        if (frame !== undefined) return frame;
        var control;
        reentry = true;
        var previousPrepareStackTrace = Error.prepareStackTrace; // $FlowFixMe It does accept undefined.
        Error.prepareStackTrace = undefined;
        var previousDispatcher;
        previousDispatcher = ReactCurrentDispatcher.current; // Set the dispatcher in DEV because this might be call in the render function
        // for warnings.
        ReactCurrentDispatcher.current = null;
        disableLogs();
        try {
            // This should throw.
            if (construct) {
                // Something should be setting the props in the constructor.
                var Fake = function() {
                    throw Error();
                }; // $FlowFixMe
                Object.defineProperty(Fake.prototype, 'props', {
                    set: function() {
                        // We use a throwing setter instead of frozen or non-writable props
                        // because that won't throw in a non-strict mode function.
                        throw Error();
                    }
                });
                if (typeof Reflect === 'object' && Reflect.construct) {
                    // We construct a different control for this case to include any extra
                    // frames added by the construct call.
                    try {
                        Reflect.construct(Fake, []);
                    } catch (x) {
                        control = x;
                    }
                    Reflect.construct(fn, [], Fake);
                } else {
                    try {
                        Fake.call();
                    } catch (x) {
                        control = x;
                    }
                    fn.call(Fake.prototype);
                }
            } else {
                try {
                    throw Error();
                } catch (x) {
                    control = x;
                }
                fn();
            }
        } catch (sample) {
            // This is inlined manually because closure doesn't do it for us.
            if (sample && control && typeof sample.stack === 'string') {
                // This extracts the first frame from the sample that isn't also in the control.
                // Skipping one frame that we assume is the frame that calls the two.
                var sampleLines = sample.stack.split('\n');
                var controlLines = control.stack.split('\n');
                var s = sampleLines.length - 1;
                var c = controlLines.length - 1;
                while(s >= 1 && c >= 0 && sampleLines[s] !== controlLines[c])// We expect at least one stack frame to be shared.
                // Typically this will be the root most one. However, stack frames may be
                // cut off due to maximum stack limits. In this case, one maybe cut off
                // earlier than the other. We assume that the sample is longer or the same
                // and there for cut off earlier. So we should find the root most frame in
                // the sample somewhere in the control.
                c--;
                for(; s >= 1 && c >= 0; s--, c--)// Next we find the first one that isn't the same which should be the
                // frame that called our sample function and the control.
                if (sampleLines[s] !== controlLines[c]) {
                    // In V8, the first line is describing the message but other VMs don't.
                    // If we're about to return the first line, and the control is also on the same
                    // line, that's a pretty good indicator that our sample threw at same line as
                    // the control. I.e. before we entered the sample frame. So we ignore this result.
                    // This can happen if you passed a class to function component, or non-function.
                    if (s !== 1 || c !== 1) do {
                        s--;
                        c--; // We may still have similar intermediate frames from the construct call.
                        // The next one that isn't the same should be our match though.
                        if (c < 0 || sampleLines[s] !== controlLines[c]) {
                            // V8 adds a "new" prefix for native classes. Let's remove it to make it prettier.
                            var _frame = '\n' + sampleLines[s].replace(' at new ', ' at ');
                            if (typeof fn === 'function') componentFrameCache.set(fn, _frame);
                            return _frame;
                        }
                    }while (s >= 1 && c >= 0)
                    break;
                }
            }
        } finally{
            reentry = false;
            ReactCurrentDispatcher.current = previousDispatcher;
            reenableLogs();
            Error.prepareStackTrace = previousPrepareStackTrace;
        } // Fallback to just using the name if we couldn't make it throw.
        var name = fn ? fn.displayName || fn.name : '';
        var syntheticFrame = name ? describeBuiltInComponentFrame(name) : '';
        if (typeof fn === 'function') componentFrameCache.set(fn, syntheticFrame);
        return syntheticFrame;
    }
    function describeFunctionComponentFrame(fn, source, ownerFn) {
        return describeNativeComponentFrame(fn, false);
    }
    function shouldConstruct(Component) {
        var prototype = Component.prototype;
        return !!(prototype && prototype.isReactComponent);
    }
    function describeUnknownElementTypeFrameInDEV(type, source, ownerFn) {
        if (type == null) return '';
        if (typeof type === 'function') return describeNativeComponentFrame(type, shouldConstruct(type));
        if (typeof type === 'string') return describeBuiltInComponentFrame(type);
        switch(type){
            case REACT_SUSPENSE_TYPE:
                return describeBuiltInComponentFrame('Suspense');
            case REACT_SUSPENSE_LIST_TYPE:
                return describeBuiltInComponentFrame('SuspenseList');
        }
        if (typeof type === 'object') switch(type.$$typeof){
            case REACT_FORWARD_REF_TYPE:
                return describeFunctionComponentFrame(type.render);
            case REACT_MEMO_TYPE:
                // Memo may contain any component type so we recursively resolve it.
                return describeUnknownElementTypeFrameInDEV(type.type, source, ownerFn);
            case REACT_BLOCK_TYPE:
                return describeFunctionComponentFrame(type._render);
            case REACT_LAZY_TYPE:
                var lazyComponent = type;
                var payload = lazyComponent._payload;
                var init = lazyComponent._init;
                try {
                    // Lazy may contain any component type so we recursively resolve it.
                    return describeUnknownElementTypeFrameInDEV(init(payload), source, ownerFn);
                } catch (x) {}
        }
        return '';
    }
    var loggedTypeFailures = {};
    var ReactDebugCurrentFrame1 = ReactSharedInternals.ReactDebugCurrentFrame;
    function setCurrentlyValidatingElement(element) {
        if (element) {
            var owner = element._owner;
            var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
            ReactDebugCurrentFrame1.setExtraStackFrame(stack);
        } else ReactDebugCurrentFrame1.setExtraStackFrame(null);
    }
    function checkPropTypes(typeSpecs, values, location, componentName, element) {
        // $FlowFixMe This is okay but Flow doesn't know it.
        var has = Function.call.bind(Object.prototype.hasOwnProperty);
        for(var typeSpecName in typeSpecs)if (has(typeSpecs, typeSpecName)) {
            var error$1 = void 0; // Prop type validation may throw. In case they do, we don't want to
            // fail the render phase where it didn't fail before. So we log it.
            // After these have been cleaned up, we'll let them throw.
            try {
                // This is intentionally an invariant that gets caught. It's the same
                // behavior as without this statement except with a better message.
                if (typeof typeSpecs[typeSpecName] !== 'function') {
                    var err = Error((componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' + 'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.' + 'This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.');
                    err.name = 'Invariant Violation';
                    throw err;
                }
                error$1 = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED');
            } catch (ex) {
                error$1 = ex;
            }
            if (error$1 && !(error$1 instanceof Error)) {
                setCurrentlyValidatingElement(element);
                error("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", componentName || 'React class', location, typeSpecName, typeof error$1);
                setCurrentlyValidatingElement(null);
            }
            if (error$1 instanceof Error && !(error$1.message in loggedTypeFailures)) {
                // Only monitor this failure once because there tends to be a lot of the
                // same error.
                loggedTypeFailures[error$1.message] = true;
                setCurrentlyValidatingElement(element);
                error('Failed %s type: %s', location, error$1.message);
                setCurrentlyValidatingElement(null);
            }
        }
    }
    var ReactCurrentOwner = ReactSharedInternals.ReactCurrentOwner;
    var hasOwnProperty = Object.prototype.hasOwnProperty;
    var RESERVED_PROPS = {
        key: true,
        ref: true,
        __self: true,
        __source: true
    };
    var specialPropKeyWarningShown;
    var specialPropRefWarningShown;
    var didWarnAboutStringRefs;
    didWarnAboutStringRefs = {};
    function hasValidRef(config) {
        if (hasOwnProperty.call(config, 'ref')) {
            var getter = Object.getOwnPropertyDescriptor(config, 'ref').get;
            if (getter && getter.isReactWarning) return false;
        }
        return config.ref !== undefined;
    }
    function hasValidKey(config) {
        if (hasOwnProperty.call(config, 'key')) {
            var getter = Object.getOwnPropertyDescriptor(config, 'key').get;
            if (getter && getter.isReactWarning) return false;
        }
        return config.key !== undefined;
    }
    function warnIfStringRefCannotBeAutoConverted(config, self) {
        if (typeof config.ref === 'string' && ReactCurrentOwner.current && self && ReactCurrentOwner.current.stateNode !== self) {
            var componentName = getComponentName(ReactCurrentOwner.current.type);
            if (!didWarnAboutStringRefs[componentName]) {
                error('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', getComponentName(ReactCurrentOwner.current.type), config.ref);
                didWarnAboutStringRefs[componentName] = true;
            }
        }
    }
    function defineKeyPropWarningGetter(props, displayName) {
        var warnAboutAccessingKey = function() {
            if (!specialPropKeyWarningShown) {
                specialPropKeyWarningShown = true;
                error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", displayName);
            }
        };
        warnAboutAccessingKey.isReactWarning = true;
        Object.defineProperty(props, 'key', {
            get: warnAboutAccessingKey,
            configurable: true
        });
    }
    function defineRefPropWarningGetter(props, displayName) {
        var warnAboutAccessingRef = function() {
            if (!specialPropRefWarningShown) {
                specialPropRefWarningShown = true;
                error("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", displayName);
            }
        };
        warnAboutAccessingRef.isReactWarning = true;
        Object.defineProperty(props, 'ref', {
            get: warnAboutAccessingRef,
            configurable: true
        });
    }
    /**
 * Factory method to create a new React element. This no longer adheres to
 * the class pattern, so do not use new to call it. Also, instanceof check
 * will not work. Instead test $$typeof field against Symbol.for('react.element') to check
 * if something is a React Element.
 *
 * @param {*} type
 * @param {*} props
 * @param {*} key
 * @param {string|object} ref
 * @param {*} owner
 * @param {*} self A *temporary* helper to detect places where `this` is
 * different from the `owner` when React.createElement is called, so that we
 * can warn. We want to get rid of owner and replace string `ref`s with arrow
 * functions, and as long as `this` and owner are the same, there will be no
 * change in behavior.
 * @param {*} source An annotation object (added by a transpiler or otherwise)
 * indicating filename, line number, and/or other information.
 * @internal
 */ var ReactElement = function(type, key, ref, self, source, owner, props) {
        var element = {
            // This tag allows us to uniquely identify this as a React Element
            $$typeof: REACT_ELEMENT_TYPE,
            // Built-in properties that belong on the element
            type: type,
            key: key,
            ref: ref,
            props: props,
            // Record the component responsible for creating this element.
            _owner: owner
        };
        // The validation flag is currently mutative. We put it on
        // an external backing store so that we can freeze the whole object.
        // This can be replaced with a WeakMap once they are implemented in
        // commonly used development environments.
        element._store = {}; // To make comparing ReactElements easier for testing purposes, we make
        // the validation flag non-enumerable (where possible, which should
        // include every environment we run tests in), so the test framework
        // ignores it.
        Object.defineProperty(element._store, 'validated', {
            configurable: false,
            enumerable: false,
            writable: true,
            value: false
        }); // self and source are DEV only properties.
        Object.defineProperty(element, '_self', {
            configurable: false,
            enumerable: false,
            writable: false,
            value: self
        }); // Two elements created in two different places should be considered
        // equal for testing purposes and therefore we hide it from enumeration.
        Object.defineProperty(element, '_source', {
            configurable: false,
            enumerable: false,
            writable: false,
            value: source
        });
        if (Object.freeze) {
            Object.freeze(element.props);
            Object.freeze(element);
        }
        return element;
    };
    /**
 * https://github.com/reactjs/rfcs/pull/107
 * @param {*} type
 * @param {object} props
 * @param {string} key
 */ function jsxDEV(type, config, maybeKey, source, self) {
        var propName; // Reserved names are extracted
        var props = {};
        var key = null;
        var ref = null; // Currently, key can be spread in as a prop. This causes a potential
        // issue if key is also explicitly declared (ie. <div {...props} key="Hi" />
        // or <div key="Hi" {...props} /> ). We want to deprecate key spread,
        // but as an intermediary step, we will use jsxDEV for everything except
        // <div {...props} key="Hi" />, because we aren't currently able to tell if
        // key is explicitly declared to be undefined or not.
        if (maybeKey !== undefined) key = '' + maybeKey;
        if (hasValidKey(config)) key = '' + config.key;
        if (hasValidRef(config)) {
            ref = config.ref;
            warnIfStringRefCannotBeAutoConverted(config, self);
        } // Remaining properties are added to a new props object
        for(propName in config)if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) props[propName] = config[propName];
         // Resolve default props
        if (type && type.defaultProps) {
            var defaultProps = type.defaultProps;
            for(propName in defaultProps)if (props[propName] === undefined) props[propName] = defaultProps[propName];
        }
        if (key || ref) {
            var displayName = typeof type === 'function' ? type.displayName || type.name || 'Unknown' : type;
            if (key) defineKeyPropWarningGetter(props, displayName);
            if (ref) defineRefPropWarningGetter(props, displayName);
        }
        return ReactElement(type, key, ref, self, source, ReactCurrentOwner.current, props);
    }
    var ReactCurrentOwner$1 = ReactSharedInternals.ReactCurrentOwner;
    var ReactDebugCurrentFrame$1 = ReactSharedInternals.ReactDebugCurrentFrame;
    function setCurrentlyValidatingElement$1(element) {
        if (element) {
            var owner = element._owner;
            var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
            ReactDebugCurrentFrame$1.setExtraStackFrame(stack);
        } else ReactDebugCurrentFrame$1.setExtraStackFrame(null);
    }
    var propTypesMisspellWarningShown;
    propTypesMisspellWarningShown = false;
    /**
 * Verifies the object is a ReactElement.
 * See https://reactjs.org/docs/react-api.html#isvalidelement
 * @param {?object} object
 * @return {boolean} True if `object` is a ReactElement.
 * @final
 */ function isValidElement(object) {
        return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
    }
    function getDeclarationErrorAddendum() {
        if (ReactCurrentOwner$1.current) {
            var name = getComponentName(ReactCurrentOwner$1.current.type);
            if (name) return '\n\nCheck the render method of `' + name + '`.';
        }
        return '';
    }
    function getSourceInfoErrorAddendum(source) {
        if (source !== undefined) {
            var fileName = source.fileName.replace(/^.*[\\\/]/, '');
            var lineNumber = source.lineNumber;
            return '\n\nCheck your code at ' + fileName + ':' + lineNumber + '.';
        }
        return '';
    }
    /**
 * Warn if there's no key explicitly set on dynamic arrays of children or
 * object keys are not valid. This allows us to keep track of children between
 * updates.
 */ var ownerHasKeyUseWarning = {};
    function getCurrentComponentErrorInfo(parentType) {
        var info = getDeclarationErrorAddendum();
        if (!info) {
            var parentName = typeof parentType === 'string' ? parentType : parentType.displayName || parentType.name;
            if (parentName) info = "\n\nCheck the top-level render call using <" + parentName + ">.";
        }
        return info;
    }
    /**
 * Warn if the element doesn't have an explicit key assigned to it.
 * This element is in an array. The array could grow and shrink or be
 * reordered. All children that haven't already been validated are required to
 * have a "key" property assigned to it. Error statuses are cached so a warning
 * will only be shown once.
 *
 * @internal
 * @param {ReactElement} element Element that requires a key.
 * @param {*} parentType element's parent's type.
 */ function validateExplicitKey(element, parentType) {
        if (!element._store || element._store.validated || element.key != null) return;
        element._store.validated = true;
        var currentComponentErrorInfo = getCurrentComponentErrorInfo(parentType);
        if (ownerHasKeyUseWarning[currentComponentErrorInfo]) return;
        ownerHasKeyUseWarning[currentComponentErrorInfo] = true; // Usually the current owner is the offender, but if it accepts children as a
        // property, it may be the creator of the child that's responsible for
        // assigning it a key.
        var childOwner = '';
        if (element && element._owner && element._owner !== ReactCurrentOwner$1.current) // Give the component that originally created this child.
        childOwner = " It was passed a child from " + getComponentName(element._owner.type) + ".";
        setCurrentlyValidatingElement$1(element);
        error('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', currentComponentErrorInfo, childOwner);
        setCurrentlyValidatingElement$1(null);
    }
    /**
 * Ensure that every element either is passed in a static location, in an
 * array with an explicit keys property defined, or in an object literal
 * with valid key property.
 *
 * @internal
 * @param {ReactNode} node Statically passed child of any type.
 * @param {*} parentType node's parent's type.
 */ function validateChildKeys(node, parentType) {
        if (typeof node !== 'object') return;
        if (Array.isArray(node)) for(var i = 0; i < node.length; i++){
            var child = node[i];
            if (isValidElement(child)) validateExplicitKey(child, parentType);
        }
        else if (isValidElement(node)) // This element was passed in a valid location.
        {
            if (node._store) node._store.validated = true;
        } else if (node) {
            var iteratorFn = getIteratorFn(node);
            if (typeof iteratorFn === 'function') // Entry iterators used to provide implicit keys,
            // but now we print a separate warning for them later.
            {
                if (iteratorFn !== node.entries) {
                    var iterator = iteratorFn.call(node);
                    var step;
                    while(!(step = iterator.next()).done)if (isValidElement(step.value)) validateExplicitKey(step.value, parentType);
                }
            }
        }
    }
    /**
 * Given an element, validate that its props follow the propTypes definition,
 * provided by the type.
 *
 * @param {ReactElement} element
 */ function validatePropTypes(element) {
        var type = element.type;
        if (type === null || type === undefined || typeof type === 'string') return;
        var propTypes;
        if (typeof type === 'function') propTypes = type.propTypes;
        else if (typeof type === 'object' && (type.$$typeof === REACT_FORWARD_REF_TYPE || // Inner props are checked in the reconciler.
        type.$$typeof === REACT_MEMO_TYPE)) propTypes = type.propTypes;
        else return;
        if (propTypes) {
            // Intentionally inside to avoid triggering lazy initializers:
            var name = getComponentName(type);
            checkPropTypes(propTypes, element.props, 'prop', name, element);
        } else if (type.PropTypes !== undefined && !propTypesMisspellWarningShown) {
            propTypesMisspellWarningShown = true; // Intentionally inside to avoid triggering lazy initializers:
            var _name = getComponentName(type);
            error('Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?', _name || 'Unknown');
        }
        if (typeof type.getDefaultProps === 'function' && !type.getDefaultProps.isReactClassApproved) error("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
    }
    /**
 * Given a fragment, validate that it can only be provided with fragment props
 * @param {ReactElement} fragment
 */ function validateFragmentProps(fragment) {
        var keys = Object.keys(fragment.props);
        for(var i = 0; i < keys.length; i++){
            var key = keys[i];
            if (key !== 'children' && key !== 'key') {
                setCurrentlyValidatingElement$1(fragment);
                error("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", key);
                setCurrentlyValidatingElement$1(null);
                break;
            }
        }
        if (fragment.ref !== null) {
            setCurrentlyValidatingElement$1(fragment);
            error('Invalid attribute `ref` supplied to `React.Fragment`.');
            setCurrentlyValidatingElement$1(null);
        }
    }
    function jsxWithValidation(type, props, key, isStaticChildren, source, self) {
        var validType = isValidElementType(type); // We warn in this case but don't throw. We expect the element creation to
        // succeed and there will likely be errors in render.
        if (!validType) {
            var info = '';
            if (type === undefined || typeof type === 'object' && type !== null && Object.keys(type).length === 0) info += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.";
            var sourceInfo = getSourceInfoErrorAddendum(source);
            if (sourceInfo) info += sourceInfo;
            else info += getDeclarationErrorAddendum();
            var typeString;
            if (type === null) typeString = 'null';
            else if (Array.isArray(type)) typeString = 'array';
            else if (type !== undefined && type.$$typeof === REACT_ELEMENT_TYPE) {
                typeString = "<" + (getComponentName(type.type) || 'Unknown') + " />";
                info = ' Did you accidentally export a JSX literal instead of a component?';
            } else typeString = typeof type;
            error("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", typeString, info);
        }
        var element = jsxDEV(type, props, key, source, self); // The result can be nullish if a mock or a custom function is used.
        // TODO: Drop this when these are no longer allowed as the type argument.
        if (element == null) return element;
         // Skip key warning if the type isn't valid since our key validation logic
        // doesn't expect a non-string/function type and can throw confusing errors.
        // We don't want exception behavior to differ between dev and prod.
        // (Rendering will throw with a helpful message and as soon as the type is
        // fixed, the key warnings will appear.)
        if (validType) {
            var children = props.children;
            if (children !== undefined) {
                if (isStaticChildren) {
                    if (Array.isArray(children)) {
                        for(var i = 0; i < children.length; i++)validateChildKeys(children[i], type);
                        if (Object.freeze) Object.freeze(children);
                    } else error("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
                } else validateChildKeys(children, type);
            }
        }
        if (type === exports.Fragment) validateFragmentProps(element);
        else validatePropTypes(element);
        return element;
    } // These two functions exist to still get child warnings in dev
    var jsxDEV$1 = jsxWithValidation;
    exports.jsxDEV = jsxDEV$1;
})();

},{"react":"21dqq","object-assign":"7OXxh"}],"21dqq":[function(require,module,exports) {
'use strict';
module.exports = require('./cjs/react.development.js');

},{"./cjs/react.development.js":"6YvXz"}],"6YvXz":[function(require,module,exports) {
/** @license React v17.0.2
 * react.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 'use strict';
(function() {
    var _assign = require('object-assign');
    // TODO: this is special because it gets imported during build.
    var ReactVersion = '17.0.2';
    // ATTENTION
    // When adding new symbols to this file,
    // Please consider also adding to 'react-devtools-shared/src/backend/ReactSymbols'
    // The Symbol used to tag the ReactElement-like types. If there is no native Symbol
    // nor polyfill, then a plain number is used for performance.
    var REACT_ELEMENT_TYPE = 60103;
    var REACT_PORTAL_TYPE = 60106;
    exports.Fragment = 60107;
    exports.StrictMode = 60108;
    exports.Profiler = 60114;
    var REACT_PROVIDER_TYPE = 60109;
    var REACT_CONTEXT_TYPE = 60110;
    var REACT_FORWARD_REF_TYPE = 60112;
    exports.Suspense = 60113;
    var REACT_SUSPENSE_LIST_TYPE = 60120;
    var REACT_MEMO_TYPE = 60115;
    var REACT_LAZY_TYPE = 60116;
    var REACT_BLOCK_TYPE = 60121;
    var REACT_SERVER_BLOCK_TYPE = 60122;
    var REACT_FUNDAMENTAL_TYPE = 60117;
    var REACT_SCOPE_TYPE = 60119;
    var REACT_OPAQUE_ID_TYPE = 60128;
    var REACT_DEBUG_TRACING_MODE_TYPE = 60129;
    var REACT_OFFSCREEN_TYPE = 60130;
    var REACT_LEGACY_HIDDEN_TYPE = 60131;
    if (typeof Symbol === 'function' && Symbol.for) {
        var symbolFor = Symbol.for;
        REACT_ELEMENT_TYPE = symbolFor('react.element');
        REACT_PORTAL_TYPE = symbolFor('react.portal');
        exports.Fragment = symbolFor('react.fragment');
        exports.StrictMode = symbolFor('react.strict_mode');
        exports.Profiler = symbolFor('react.profiler');
        REACT_PROVIDER_TYPE = symbolFor('react.provider');
        REACT_CONTEXT_TYPE = symbolFor('react.context');
        REACT_FORWARD_REF_TYPE = symbolFor('react.forward_ref');
        exports.Suspense = symbolFor('react.suspense');
        REACT_SUSPENSE_LIST_TYPE = symbolFor('react.suspense_list');
        REACT_MEMO_TYPE = symbolFor('react.memo');
        REACT_LAZY_TYPE = symbolFor('react.lazy');
        REACT_BLOCK_TYPE = symbolFor('react.block');
        REACT_SERVER_BLOCK_TYPE = symbolFor('react.server.block');
        REACT_FUNDAMENTAL_TYPE = symbolFor('react.fundamental');
        REACT_SCOPE_TYPE = symbolFor('react.scope');
        REACT_OPAQUE_ID_TYPE = symbolFor('react.opaque.id');
        REACT_DEBUG_TRACING_MODE_TYPE = symbolFor('react.debug_trace_mode');
        REACT_OFFSCREEN_TYPE = symbolFor('react.offscreen');
        REACT_LEGACY_HIDDEN_TYPE = symbolFor('react.legacy_hidden');
    }
    var MAYBE_ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
    var FAUX_ITERATOR_SYMBOL = '@@iterator';
    function getIteratorFn(maybeIterable) {
        if (maybeIterable === null || typeof maybeIterable !== 'object') return null;
        var maybeIterator = MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL];
        if (typeof maybeIterator === 'function') return maybeIterator;
        return null;
    }
    /**
 * Keeps track of the current dispatcher.
 */ var ReactCurrentDispatcher = {
        /**
   * @internal
   * @type {ReactComponent}
   */ current: null
    };
    /**
 * Keeps track of the current batch's configuration such as how long an update
 * should suspend for if it needs to.
 */ var ReactCurrentBatchConfig = {
        transition: 0
    };
    /**
 * Keeps track of the current owner.
 *
 * The current owner is the component who should own any components that are
 * currently being constructed.
 */ var ReactCurrentOwner = {
        /**
   * @internal
   * @type {ReactComponent}
   */ current: null
    };
    var ReactDebugCurrentFrame1 = {};
    var currentExtraStackFrame = null;
    function setExtraStackFrame(stack) {
        currentExtraStackFrame = stack;
    }
    ReactDebugCurrentFrame1.setExtraStackFrame = function(stack) {
        currentExtraStackFrame = stack;
    }; // Stack implementation injected by the current renderer.
    ReactDebugCurrentFrame1.getCurrentStack = null;
    ReactDebugCurrentFrame1.getStackAddendum = function() {
        var stack = ''; // Add an extra top frame while an element is being validated
        if (currentExtraStackFrame) stack += currentExtraStackFrame;
         // Delegate to the injected renderer-specific implementation
        var impl = ReactDebugCurrentFrame1.getCurrentStack;
        if (impl) stack += impl() || '';
        return stack;
    };
    /**
 * Used by act() to track whether you're inside an act() scope.
 */ var IsSomeRendererActing = {
        current: false
    };
    var ReactSharedInternals = {
        ReactCurrentDispatcher: ReactCurrentDispatcher,
        ReactCurrentBatchConfig: ReactCurrentBatchConfig,
        ReactCurrentOwner: ReactCurrentOwner,
        IsSomeRendererActing: IsSomeRendererActing,
        // Used by renderers to avoid bundling object-assign twice in UMD bundles:
        assign: _assign
    };
    ReactSharedInternals.ReactDebugCurrentFrame = ReactDebugCurrentFrame1;
    // by calls to these methods by a Babel plugin.
    //
    // In PROD (or in packages without access to React internals),
    // they are left as they are instead.
    function warn(format) {
        for(var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++)args[_key - 1] = arguments[_key];
        printWarning('warn', format, args);
    }
    function error1(format) {
        for(var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++)args[_key2 - 1] = arguments[_key2];
        printWarning('error', format, args);
    }
    function printWarning(level, format, args) {
        var ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;
        var stack = ReactDebugCurrentFrame.getStackAddendum();
        if (stack !== '') {
            format += '%s';
            args = args.concat([
                stack
            ]);
        }
        var argsWithFormat = args.map(function(item) {
            return '' + item;
        }); // Careful: RN currently depends on this prefix
        argsWithFormat.unshift('Warning: ' + format); // We intentionally don't use spread (or .apply) directly because it
        // breaks IE9: https://github.com/facebook/react/issues/13610
        // eslint-disable-next-line react-internal/no-production-logging
        Function.prototype.apply.call(console[level], console, argsWithFormat);
    }
    var didWarnStateUpdateForUnmountedComponent = {};
    function warnNoop(publicInstance, callerName) {
        var _constructor = publicInstance.constructor;
        var componentName = _constructor && (_constructor.displayName || _constructor.name) || 'ReactClass';
        var warningKey = componentName + "." + callerName;
        if (didWarnStateUpdateForUnmountedComponent[warningKey]) return;
        error1("Can't call %s on a component that is not yet mounted. This is a no-op, but it might indicate a bug in your application. Instead, assign to `this.state` directly or define a `state = {};` class property with the desired state in the %s component.", callerName, componentName);
        didWarnStateUpdateForUnmountedComponent[warningKey] = true;
    }
    /**
 * This is the abstract API for an update queue.
 */ var ReactNoopUpdateQueue = {
        /**
   * Checks whether or not this composite component is mounted.
   * @param {ReactClass} publicInstance The instance we want to test.
   * @return {boolean} True if mounted, false otherwise.
   * @protected
   * @final
   */ isMounted: function(publicInstance) {
            return false;
        },
        /**
   * Forces an update. This should only be invoked when it is known with
   * certainty that we are **not** in a DOM transaction.
   *
   * You may want to call this when you know that some deeper aspect of the
   * component's state has changed but `setState` was not called.
   *
   * This will not invoke `shouldComponentUpdate`, but it will invoke
   * `componentWillUpdate` and `componentDidUpdate`.
   *
   * @param {ReactClass} publicInstance The instance that should rerender.
   * @param {?function} callback Called after component is updated.
   * @param {?string} callerName name of the calling function in the public API.
   * @internal
   */ enqueueForceUpdate: function(publicInstance, callback, callerName) {
            warnNoop(publicInstance, 'forceUpdate');
        },
        /**
   * Replaces all of the state. Always use this or `setState` to mutate state.
   * You should treat `this.state` as immutable.
   *
   * There is no guarantee that `this.state` will be immediately updated, so
   * accessing `this.state` after calling this method may return the old value.
   *
   * @param {ReactClass} publicInstance The instance that should rerender.
   * @param {object} completeState Next state.
   * @param {?function} callback Called after component is updated.
   * @param {?string} callerName name of the calling function in the public API.
   * @internal
   */ enqueueReplaceState: function(publicInstance, completeState, callback, callerName) {
            warnNoop(publicInstance, 'replaceState');
        },
        /**
   * Sets a subset of the state. This only exists because _pendingState is
   * internal. This provides a merging strategy that is not available to deep
   * properties which is confusing. TODO: Expose pendingState or don't use it
   * during the merge.
   *
   * @param {ReactClass} publicInstance The instance that should rerender.
   * @param {object} partialState Next partial state to be merged with state.
   * @param {?function} callback Called after component is updated.
   * @param {?string} Name of the calling function in the public API.
   * @internal
   */ enqueueSetState: function(publicInstance, partialState, callback, callerName) {
            warnNoop(publicInstance, 'setState');
        }
    };
    var emptyObject = {};
    Object.freeze(emptyObject);
    /**
 * Base class helpers for the updating state of a component.
 */ function Component1(props, context, updater) {
        this.props = props;
        this.context = context; // If a component has string refs, we will assign a different object later.
        this.refs = emptyObject; // We initialize the default updater but the real one gets injected by the
        // renderer.
        this.updater = updater || ReactNoopUpdateQueue;
    }
    Component1.prototype.isReactComponent = {};
    /**
 * Sets a subset of the state. Always use this to mutate
 * state. You should treat `this.state` as immutable.
 *
 * There is no guarantee that `this.state` will be immediately updated, so
 * accessing `this.state` after calling this method may return the old value.
 *
 * There is no guarantee that calls to `setState` will run synchronously,
 * as they may eventually be batched together.  You can provide an optional
 * callback that will be executed when the call to setState is actually
 * completed.
 *
 * When a function is provided to setState, it will be called at some point in
 * the future (not synchronously). It will be called with the up to date
 * component arguments (state, props, context). These values can be different
 * from this.* because your function may be called after receiveProps but before
 * shouldComponentUpdate, and this new state, props, and context will not yet be
 * assigned to this.
 *
 * @param {object|function} partialState Next partial state or function to
 *        produce next partial state to be merged with current state.
 * @param {?function} callback Called after state is updated.
 * @final
 * @protected
 */ Component1.prototype.setState = function(partialState, callback) {
        if (!(typeof partialState === 'object' || typeof partialState === 'function' || partialState == null)) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
        this.updater.enqueueSetState(this, partialState, callback, 'setState');
    };
    /**
 * Forces an update. This should only be invoked when it is known with
 * certainty that we are **not** in a DOM transaction.
 *
 * You may want to call this when you know that some deeper aspect of the
 * component's state has changed but `setState` was not called.
 *
 * This will not invoke `shouldComponentUpdate`, but it will invoke
 * `componentWillUpdate` and `componentDidUpdate`.
 *
 * @param {?function} callback Called after update is complete.
 * @final
 * @protected
 */ Component1.prototype.forceUpdate = function(callback) {
        this.updater.enqueueForceUpdate(this, callback, 'forceUpdate');
    };
    var deprecatedAPIs = {
        isMounted: [
            'isMounted',
            "Instead, make sure to clean up subscriptions and pending requests in componentWillUnmount to prevent memory leaks."
        ],
        replaceState: [
            'replaceState',
            "Refactor your code to use setState instead (see https://github.com/facebook/react/issues/3236)."
        ]
    };
    var defineDeprecationWarning = function(methodName, info) {
        Object.defineProperty(Component1.prototype, methodName, {
            get: function() {
                warn('%s(...) is deprecated in plain JavaScript React classes. %s', info[0], info[1]);
                return undefined;
            }
        });
    };
    for(var fnName in deprecatedAPIs)if (deprecatedAPIs.hasOwnProperty(fnName)) defineDeprecationWarning(fnName, deprecatedAPIs[fnName]);
    function ComponentDummy() {}
    ComponentDummy.prototype = Component1.prototype;
    /**
 * Convenience component with default shallow equality check for sCU.
 */ function PureComponent(props, context, updater) {
        this.props = props;
        this.context = context; // If a component has string refs, we will assign a different object later.
        this.refs = emptyObject;
        this.updater = updater || ReactNoopUpdateQueue;
    }
    var pureComponentPrototype = PureComponent.prototype = new ComponentDummy();
    pureComponentPrototype.constructor = PureComponent; // Avoid an extra prototype jump for these methods.
    _assign(pureComponentPrototype, Component1.prototype);
    pureComponentPrototype.isPureReactComponent = true;
    // an immutable object with a single mutable value
    function createRef() {
        var refObject = {
            current: null
        };
        Object.seal(refObject);
        return refObject;
    }
    function getWrappedName(outerType, innerType, wrapperName) {
        var functionName = innerType.displayName || innerType.name || '';
        return outerType.displayName || (functionName !== '' ? wrapperName + "(" + functionName + ")" : wrapperName);
    }
    function getContextName(type) {
        return type.displayName || 'Context';
    }
    function getComponentName(type) {
        if (type == null) // Host root, text node or just invalid type.
        return null;
        if (typeof type.tag === 'number') error1("Received an unexpected object in getComponentName(). This is likely a bug in React. Please file an issue.");
        if (typeof type === 'function') return type.displayName || type.name || null;
        if (typeof type === 'string') return type;
        switch(type){
            case exports.Fragment:
                return 'Fragment';
            case REACT_PORTAL_TYPE:
                return 'Portal';
            case exports.Profiler:
                return 'Profiler';
            case exports.StrictMode:
                return 'StrictMode';
            case exports.Suspense:
                return 'Suspense';
            case REACT_SUSPENSE_LIST_TYPE:
                return 'SuspenseList';
        }
        if (typeof type === 'object') switch(type.$$typeof){
            case REACT_CONTEXT_TYPE:
                var context = type;
                return getContextName(context) + '.Consumer';
            case REACT_PROVIDER_TYPE:
                var provider = type;
                return getContextName(provider._context) + '.Provider';
            case REACT_FORWARD_REF_TYPE:
                return getWrappedName(type, type.render, 'ForwardRef');
            case REACT_MEMO_TYPE:
                return getComponentName(type.type);
            case REACT_BLOCK_TYPE:
                return getComponentName(type._render);
            case REACT_LAZY_TYPE:
                var lazyComponent = type;
                var payload = lazyComponent._payload;
                var init = lazyComponent._init;
                try {
                    return getComponentName(init(payload));
                } catch (x) {
                    return null;
                }
        }
        return null;
    }
    var hasOwnProperty = Object.prototype.hasOwnProperty;
    var RESERVED_PROPS = {
        key: true,
        ref: true,
        __self: true,
        __source: true
    };
    var specialPropKeyWarningShown, specialPropRefWarningShown, didWarnAboutStringRefs;
    didWarnAboutStringRefs = {};
    function hasValidRef(config) {
        if (hasOwnProperty.call(config, 'ref')) {
            var getter = Object.getOwnPropertyDescriptor(config, 'ref').get;
            if (getter && getter.isReactWarning) return false;
        }
        return config.ref !== undefined;
    }
    function hasValidKey(config) {
        if (hasOwnProperty.call(config, 'key')) {
            var getter = Object.getOwnPropertyDescriptor(config, 'key').get;
            if (getter && getter.isReactWarning) return false;
        }
        return config.key !== undefined;
    }
    function defineKeyPropWarningGetter(props, displayName) {
        var warnAboutAccessingKey = function() {
            if (!specialPropKeyWarningShown) {
                specialPropKeyWarningShown = true;
                error1("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", displayName);
            }
        };
        warnAboutAccessingKey.isReactWarning = true;
        Object.defineProperty(props, 'key', {
            get: warnAboutAccessingKey,
            configurable: true
        });
    }
    function defineRefPropWarningGetter(props, displayName) {
        var warnAboutAccessingRef = function() {
            if (!specialPropRefWarningShown) {
                specialPropRefWarningShown = true;
                error1("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", displayName);
            }
        };
        warnAboutAccessingRef.isReactWarning = true;
        Object.defineProperty(props, 'ref', {
            get: warnAboutAccessingRef,
            configurable: true
        });
    }
    function warnIfStringRefCannotBeAutoConverted(config) {
        if (typeof config.ref === 'string' && ReactCurrentOwner.current && config.__self && ReactCurrentOwner.current.stateNode !== config.__self) {
            var componentName = getComponentName(ReactCurrentOwner.current.type);
            if (!didWarnAboutStringRefs[componentName]) {
                error1('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', componentName, config.ref);
                didWarnAboutStringRefs[componentName] = true;
            }
        }
    }
    /**
 * Factory method to create a new React element. This no longer adheres to
 * the class pattern, so do not use new to call it. Also, instanceof check
 * will not work. Instead test $$typeof field against Symbol.for('react.element') to check
 * if something is a React Element.
 *
 * @param {*} type
 * @param {*} props
 * @param {*} key
 * @param {string|object} ref
 * @param {*} owner
 * @param {*} self A *temporary* helper to detect places where `this` is
 * different from the `owner` when React.createElement is called, so that we
 * can warn. We want to get rid of owner and replace string `ref`s with arrow
 * functions, and as long as `this` and owner are the same, there will be no
 * change in behavior.
 * @param {*} source An annotation object (added by a transpiler or otherwise)
 * indicating filename, line number, and/or other information.
 * @internal
 */ var ReactElement = function(type, key, ref, self, source, owner, props) {
        var element = {
            // This tag allows us to uniquely identify this as a React Element
            $$typeof: REACT_ELEMENT_TYPE,
            // Built-in properties that belong on the element
            type: type,
            key: key,
            ref: ref,
            props: props,
            // Record the component responsible for creating this element.
            _owner: owner
        };
        // The validation flag is currently mutative. We put it on
        // an external backing store so that we can freeze the whole object.
        // This can be replaced with a WeakMap once they are implemented in
        // commonly used development environments.
        element._store = {}; // To make comparing ReactElements easier for testing purposes, we make
        // the validation flag non-enumerable (where possible, which should
        // include every environment we run tests in), so the test framework
        // ignores it.
        Object.defineProperty(element._store, 'validated', {
            configurable: false,
            enumerable: false,
            writable: true,
            value: false
        }); // self and source are DEV only properties.
        Object.defineProperty(element, '_self', {
            configurable: false,
            enumerable: false,
            writable: false,
            value: self
        }); // Two elements created in two different places should be considered
        // equal for testing purposes and therefore we hide it from enumeration.
        Object.defineProperty(element, '_source', {
            configurable: false,
            enumerable: false,
            writable: false,
            value: source
        });
        if (Object.freeze) {
            Object.freeze(element.props);
            Object.freeze(element);
        }
        return element;
    };
    /**
 * Create and return a new ReactElement of the given type.
 * See https://reactjs.org/docs/react-api.html#createelement
 */ function createElement(type, config, children) {
        var propName; // Reserved names are extracted
        var props = {};
        var key = null;
        var ref = null;
        var self = null;
        var source = null;
        if (config != null) {
            if (hasValidRef(config)) {
                ref = config.ref;
                warnIfStringRefCannotBeAutoConverted(config);
            }
            if (hasValidKey(config)) key = '' + config.key;
            self = config.__self === undefined ? null : config.__self;
            source = config.__source === undefined ? null : config.__source; // Remaining properties are added to a new props object
            for(propName in config)if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) props[propName] = config[propName];
        } // Children can be more than one argument, and those are transferred onto
        // the newly allocated props object.
        var childrenLength = arguments.length - 2;
        if (childrenLength === 1) props.children = children;
        else if (childrenLength > 1) {
            var childArray = Array(childrenLength);
            for(var i = 0; i < childrenLength; i++)childArray[i] = arguments[i + 2];
            if (Object.freeze) Object.freeze(childArray);
            props.children = childArray;
        } // Resolve default props
        if (type && type.defaultProps) {
            var defaultProps = type.defaultProps;
            for(propName in defaultProps)if (props[propName] === undefined) props[propName] = defaultProps[propName];
        }
        if (key || ref) {
            var displayName = typeof type === 'function' ? type.displayName || type.name || 'Unknown' : type;
            if (key) defineKeyPropWarningGetter(props, displayName);
            if (ref) defineRefPropWarningGetter(props, displayName);
        }
        return ReactElement(type, key, ref, self, source, ReactCurrentOwner.current, props);
    }
    function cloneAndReplaceKey(oldElement, newKey) {
        var newElement = ReactElement(oldElement.type, newKey, oldElement.ref, oldElement._self, oldElement._source, oldElement._owner, oldElement.props);
        return newElement;
    }
    /**
 * Clone and return a new ReactElement using element as the starting point.
 * See https://reactjs.org/docs/react-api.html#cloneelement
 */ function cloneElement(element, config, children) {
        if (!!(element === null || element === undefined)) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + element + ".");
        var propName; // Original props are copied
        var props = _assign({}, element.props); // Reserved names are extracted
        var key = element.key;
        var ref = element.ref; // Self is preserved since the owner is preserved.
        var self = element._self; // Source is preserved since cloneElement is unlikely to be targeted by a
        // transpiler, and the original source is probably a better indicator of the
        // true owner.
        var source = element._source; // Owner will be preserved, unless ref is overridden
        var owner = element._owner;
        if (config != null) {
            if (hasValidRef(config)) {
                // Silently steal the ref from the parent.
                ref = config.ref;
                owner = ReactCurrentOwner.current;
            }
            if (hasValidKey(config)) key = '' + config.key;
             // Remaining properties override existing props
            var defaultProps;
            if (element.type && element.type.defaultProps) defaultProps = element.type.defaultProps;
            for(propName in config)if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
                if (config[propName] === undefined && defaultProps !== undefined) // Resolve default props
                props[propName] = defaultProps[propName];
                else props[propName] = config[propName];
            }
        } // Children can be more than one argument, and those are transferred onto
        // the newly allocated props object.
        var childrenLength = arguments.length - 2;
        if (childrenLength === 1) props.children = children;
        else if (childrenLength > 1) {
            var childArray = Array(childrenLength);
            for(var i = 0; i < childrenLength; i++)childArray[i] = arguments[i + 2];
            props.children = childArray;
        }
        return ReactElement(element.type, key, ref, self, source, owner, props);
    }
    /**
 * Verifies the object is a ReactElement.
 * See https://reactjs.org/docs/react-api.html#isvalidelement
 * @param {?object} object
 * @return {boolean} True if `object` is a ReactElement.
 * @final
 */ function isValidElement(object) {
        return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
    }
    var SEPARATOR = '.';
    var SUBSEPARATOR = ':';
    /**
 * Escape and wrap key so it is safe to use as a reactid
 *
 * @param {string} key to be escaped.
 * @return {string} the escaped key.
 */ function escape(key) {
        var escapeRegex = /[=:]/g;
        var escaperLookup = {
            '=': '=0',
            ':': '=2'
        };
        var escapedString = key.replace(escapeRegex, function(match) {
            return escaperLookup[match];
        });
        return '$' + escapedString;
    }
    /**
 * TODO: Test that a single child and an array with one item have the same key
 * pattern.
 */ var didWarnAboutMaps = false;
    var userProvidedKeyEscapeRegex = /\/+/g;
    function escapeUserProvidedKey(text) {
        return text.replace(userProvidedKeyEscapeRegex, '$&/');
    }
    /**
 * Generate a key string that identifies a element within a set.
 *
 * @param {*} element A element that could contain a manual key.
 * @param {number} index Index that is used if a manual key is not provided.
 * @return {string}
 */ function getElementKey(element, index) {
        // Do some typechecking here since we call this blindly. We want to ensure
        // that we don't block potential future ES APIs.
        if (typeof element === 'object' && element !== null && element.key != null) // Explicit key
        return escape('' + element.key);
         // Implicit key determined by the index in the set
        return index.toString(36);
    }
    function mapIntoArray(children, array, escapedPrefix, nameSoFar, callback) {
        var type = typeof children;
        if (type === 'undefined' || type === 'boolean') // All of the above are perceived as null.
        children = null;
        var invokeCallback = false;
        if (children === null) invokeCallback = true;
        else switch(type){
            case 'string':
            case 'number':
                invokeCallback = true;
                break;
            case 'object':
                switch(children.$$typeof){
                    case REACT_ELEMENT_TYPE:
                    case REACT_PORTAL_TYPE:
                        invokeCallback = true;
                }
        }
        if (invokeCallback) {
            var _child = children;
            var mappedChild = callback(_child); // If it's the only child, treat the name as if it was wrapped in an array
            // so that it's consistent if the number of children grows:
            var childKey = nameSoFar === '' ? SEPARATOR + getElementKey(_child, 0) : nameSoFar;
            if (Array.isArray(mappedChild)) {
                var escapedChildKey = '';
                if (childKey != null) escapedChildKey = escapeUserProvidedKey(childKey) + '/';
                mapIntoArray(mappedChild, array, escapedChildKey, '', function(c) {
                    return c;
                });
            } else if (mappedChild != null) {
                if (isValidElement(mappedChild)) mappedChild = cloneAndReplaceKey(mappedChild, // traverseAllChildren used to do for objects as children
                escapedPrefix + (mappedChild.key && (!_child || _child.key !== mappedChild.key) ? escapeUserProvidedKey('' + mappedChild.key) + '/' : '') + childKey);
                array.push(mappedChild);
            }
            return 1;
        }
        var child;
        var nextName;
        var subtreeCount = 0; // Count of children found in the current subtree.
        var nextNamePrefix = nameSoFar === '' ? SEPARATOR : nameSoFar + SUBSEPARATOR;
        if (Array.isArray(children)) for(var i = 0; i < children.length; i++){
            child = children[i];
            nextName = nextNamePrefix + getElementKey(child, i);
            subtreeCount += mapIntoArray(child, array, escapedPrefix, nextName, callback);
        }
        else {
            var iteratorFn = getIteratorFn(children);
            if (typeof iteratorFn === 'function') {
                var iterableChildren = children;
                // Warn about using Maps as children
                if (iteratorFn === iterableChildren.entries) {
                    if (!didWarnAboutMaps) warn("Using Maps as children is not supported. Use an array of keyed ReactElements instead.");
                    didWarnAboutMaps = true;
                }
                var iterator = iteratorFn.call(iterableChildren);
                var step;
                var ii = 0;
                while(!(step = iterator.next()).done){
                    child = step.value;
                    nextName = nextNamePrefix + getElementKey(child, ii++);
                    subtreeCount += mapIntoArray(child, array, escapedPrefix, nextName, callback);
                }
            } else if (type === 'object') {
                var childrenString = '' + children;
                throw Error("Objects are not valid as a React child (found: " + (childrenString === '[object Object]' ? 'object with keys {' + Object.keys(children).join(', ') + '}' : childrenString) + "). If you meant to render a collection of children, use an array instead.");
            }
        }
        return subtreeCount;
    }
    /**
 * Maps children that are typically specified as `props.children`.
 *
 * See https://reactjs.org/docs/react-api.html#reactchildrenmap
 *
 * The provided mapFunction(child, index) will be called for each
 * leaf child.
 *
 * @param {?*} children Children tree container.
 * @param {function(*, int)} func The map function.
 * @param {*} context Context for mapFunction.
 * @return {object} Object containing the ordered map of results.
 */ function mapChildren(children, func, context) {
        if (children == null) return children;
        var result = [];
        var count = 0;
        mapIntoArray(children, result, '', '', function(child) {
            return func.call(context, child, count++);
        });
        return result;
    }
    /**
 * Count the number of children that are typically specified as
 * `props.children`.
 *
 * See https://reactjs.org/docs/react-api.html#reactchildrencount
 *
 * @param {?*} children Children tree container.
 * @return {number} The number of children.
 */ function countChildren(children) {
        var n = 0;
        mapChildren(children, function() {
            n++; // Don't return anything
        });
        return n;
    }
    /**
 * Iterates through children that are typically specified as `props.children`.
 *
 * See https://reactjs.org/docs/react-api.html#reactchildrenforeach
 *
 * The provided forEachFunc(child, index) will be called for each
 * leaf child.
 *
 * @param {?*} children Children tree container.
 * @param {function(*, int)} forEachFunc
 * @param {*} forEachContext Context for forEachContext.
 */ function forEachChildren(children, forEachFunc, forEachContext) {
        mapChildren(children, function() {
            forEachFunc.apply(this, arguments); // Don't return anything.
        }, forEachContext);
    }
    /**
 * Flatten a children object (typically specified as `props.children`) and
 * return an array with appropriately re-keyed children.
 *
 * See https://reactjs.org/docs/react-api.html#reactchildrentoarray
 */ function toArray(children) {
        return mapChildren(children, function(child) {
            return child;
        }) || [];
    }
    /**
 * Returns the first child in a collection of children and verifies that there
 * is only one child in the collection.
 *
 * See https://reactjs.org/docs/react-api.html#reactchildrenonly
 *
 * The current implementation of this function assumes that a single child gets
 * passed without a wrapper, but the purpose of this helper function is to
 * abstract away the particular structure of children.
 *
 * @param {?object} children Child collection structure.
 * @return {ReactElement} The first and only `ReactElement` contained in the
 * structure.
 */ function onlyChild(children) {
        if (!isValidElement(children)) throw Error("React.Children.only expected to receive a single React element child.");
        return children;
    }
    function createContext(defaultValue, calculateChangedBits) {
        if (calculateChangedBits === undefined) calculateChangedBits = null;
        else if (calculateChangedBits !== null && typeof calculateChangedBits !== 'function') error1("createContext: Expected the optional second argument to be a function. Instead received: %s", calculateChangedBits);
        var context = {
            $$typeof: REACT_CONTEXT_TYPE,
            _calculateChangedBits: calculateChangedBits,
            // As a workaround to support multiple concurrent renderers, we categorize
            // some renderers as primary and others as secondary. We only expect
            // there to be two concurrent renderers at most: React Native (primary) and
            // Fabric (secondary); React DOM (primary) and React ART (secondary).
            // Secondary renderers store their context values on separate fields.
            _currentValue: defaultValue,
            _currentValue2: defaultValue,
            // Used to track how many concurrent renderers this context currently
            // supports within in a single renderer. Such as parallel server rendering.
            _threadCount: 0,
            // These are circular
            Provider: null,
            Consumer: null
        };
        context.Provider = {
            $$typeof: REACT_PROVIDER_TYPE,
            _context: context
        };
        var hasWarnedAboutUsingNestedContextConsumers = false;
        var hasWarnedAboutUsingConsumerProvider = false;
        var hasWarnedAboutDisplayNameOnConsumer = false;
        // A separate object, but proxies back to the original context object for
        // backwards compatibility. It has a different $$typeof, so we can properly
        // warn for the incorrect usage of Context as a Consumer.
        var Consumer = {
            $$typeof: REACT_CONTEXT_TYPE,
            _context: context,
            _calculateChangedBits: context._calculateChangedBits
        }; // $FlowFixMe: Flow complains about not setting a value, which is intentional here
        Object.defineProperties(Consumer, {
            Provider: {
                get: function() {
                    if (!hasWarnedAboutUsingConsumerProvider) {
                        hasWarnedAboutUsingConsumerProvider = true;
                        error1("Rendering <Context.Consumer.Provider> is not supported and will be removed in a future major release. Did you mean to render <Context.Provider> instead?");
                    }
                    return context.Provider;
                },
                set: function(_Provider) {
                    context.Provider = _Provider;
                }
            },
            _currentValue: {
                get: function() {
                    return context._currentValue;
                },
                set: function(_currentValue) {
                    context._currentValue = _currentValue;
                }
            },
            _currentValue2: {
                get: function() {
                    return context._currentValue2;
                },
                set: function(_currentValue2) {
                    context._currentValue2 = _currentValue2;
                }
            },
            _threadCount: {
                get: function() {
                    return context._threadCount;
                },
                set: function(_threadCount) {
                    context._threadCount = _threadCount;
                }
            },
            Consumer: {
                get: function() {
                    if (!hasWarnedAboutUsingNestedContextConsumers) {
                        hasWarnedAboutUsingNestedContextConsumers = true;
                        error1("Rendering <Context.Consumer.Consumer> is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?");
                    }
                    return context.Consumer;
                }
            },
            displayName: {
                get: function() {
                    return context.displayName;
                },
                set: function(displayName) {
                    if (!hasWarnedAboutDisplayNameOnConsumer) {
                        warn("Setting `displayName` on Context.Consumer has no effect. You should set it directly on the context with Context.displayName = '%s'.", displayName);
                        hasWarnedAboutDisplayNameOnConsumer = true;
                    }
                }
            }
        }); // $FlowFixMe: Flow complains about missing properties because it doesn't understand defineProperty
        context.Consumer = Consumer;
        context._currentRenderer = null;
        context._currentRenderer2 = null;
        return context;
    }
    var Uninitialized = -1;
    var Pending = 0;
    var Resolved = 1;
    var Rejected = 2;
    function lazyInitializer(payload) {
        if (payload._status === Uninitialized) {
            var ctor = payload._result;
            var thenable = ctor(); // Transition to the next state.
            var pending = payload;
            pending._status = Pending;
            pending._result = thenable;
            thenable.then(function(moduleObject) {
                if (payload._status === Pending) {
                    var defaultExport = moduleObject.default;
                    if (defaultExport === undefined) error1("lazy: Expected the result of a dynamic import() call. Instead received: %s\n\nYour code should look like: \n  const MyComponent = lazy(() => import('./MyComponent'))", moduleObject);
                    var resolved = payload;
                    resolved._status = Resolved;
                    resolved._result = defaultExport;
                }
            }, function(error) {
                if (payload._status === Pending) {
                    // Transition to the next state.
                    var rejected = payload;
                    rejected._status = Rejected;
                    rejected._result = error;
                }
            });
        }
        if (payload._status === Resolved) return payload._result;
        else throw payload._result;
    }
    function lazy(ctor) {
        var payload = {
            // We use these fields to store the result.
            _status: -1,
            _result: ctor
        };
        var lazyType = {
            $$typeof: REACT_LAZY_TYPE,
            _payload: payload,
            _init: lazyInitializer
        };
        // In production, this would just set it on the object.
        var defaultProps;
        var propTypes; // $FlowFixMe
        Object.defineProperties(lazyType, {
            defaultProps: {
                configurable: true,
                get: function() {
                    return defaultProps;
                },
                set: function(newDefaultProps) {
                    error1("React.lazy(...): It is not supported to assign `defaultProps` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it.");
                    defaultProps = newDefaultProps; // Match production behavior more closely:
                    // $FlowFixMe
                    Object.defineProperty(lazyType, 'defaultProps', {
                        enumerable: true
                    });
                }
            },
            propTypes: {
                configurable: true,
                get: function() {
                    return propTypes;
                },
                set: function(newPropTypes) {
                    error1("React.lazy(...): It is not supported to assign `propTypes` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it.");
                    propTypes = newPropTypes; // Match production behavior more closely:
                    // $FlowFixMe
                    Object.defineProperty(lazyType, 'propTypes', {
                        enumerable: true
                    });
                }
            }
        });
        return lazyType;
    }
    function forwardRef(render) {
        if (render != null && render.$$typeof === REACT_MEMO_TYPE) error1("forwardRef requires a render function but received a `memo` component. Instead of forwardRef(memo(...)), use memo(forwardRef(...)).");
        else if (typeof render !== 'function') error1('forwardRef requires a render function but was given %s.', render === null ? 'null' : typeof render);
        else if (render.length !== 0 && render.length !== 2) error1('forwardRef render functions accept exactly two parameters: props and ref. %s', render.length === 1 ? 'Did you forget to use the ref parameter?' : 'Any additional parameter will be undefined.');
        if (render != null) {
            if (render.defaultProps != null || render.propTypes != null) error1("forwardRef render functions do not support propTypes or defaultProps. Did you accidentally pass a React component?");
        }
        var elementType = {
            $$typeof: REACT_FORWARD_REF_TYPE,
            render: render
        };
        var ownName;
        Object.defineProperty(elementType, 'displayName', {
            enumerable: false,
            configurable: true,
            get: function() {
                return ownName;
            },
            set: function(name) {
                ownName = name;
                if (render.displayName == null) render.displayName = name;
            }
        });
        return elementType;
    }
    // Filter certain DOM attributes (e.g. src, href) if their values are empty strings.
    var enableScopeAPI = false; // Experimental Create Event Handle API.
    function isValidElementType(type) {
        if (typeof type === 'string' || typeof type === 'function') return true;
         // Note: typeof might be other than 'symbol' or 'number' (e.g. if it's a polyfill).
        if (type === exports.Fragment || type === exports.Profiler || type === REACT_DEBUG_TRACING_MODE_TYPE || type === exports.StrictMode || type === exports.Suspense || type === REACT_SUSPENSE_LIST_TYPE || type === REACT_LEGACY_HIDDEN_TYPE || enableScopeAPI) return true;
        if (typeof type === 'object' && type !== null) {
            if (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_BLOCK_TYPE || type[0] === REACT_SERVER_BLOCK_TYPE) return true;
        }
        return false;
    }
    function memo(type, compare) {
        if (!isValidElementType(type)) error1("memo: The first argument must be a component. Instead received: %s", type === null ? 'null' : typeof type);
        var elementType = {
            $$typeof: REACT_MEMO_TYPE,
            type: type,
            compare: compare === undefined ? null : compare
        };
        var ownName;
        Object.defineProperty(elementType, 'displayName', {
            enumerable: false,
            configurable: true,
            get: function() {
                return ownName;
            },
            set: function(name) {
                ownName = name;
                if (type.displayName == null) type.displayName = name;
            }
        });
        return elementType;
    }
    function resolveDispatcher() {
        var dispatcher = ReactCurrentDispatcher.current;
        if (!(dispatcher !== null)) throw Error("Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:\n1. You might have mismatching versions of React and the renderer (such as React DOM)\n2. You might be breaking the Rules of Hooks\n3. You might have more than one copy of React in the same app\nSee https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.");
        return dispatcher;
    }
    function useContext(Context, unstable_observedBits) {
        var dispatcher = resolveDispatcher();
        if (unstable_observedBits !== undefined) error1("useContext() second argument is reserved for future use in React. Passing it is not supported. You passed: %s.%s", unstable_observedBits, typeof unstable_observedBits === 'number' && Array.isArray(arguments[2]) ? "\n\nDid you call array.map(useContext)? Calling Hooks inside a loop is not supported. Learn more at https://reactjs.org/link/rules-of-hooks" : '');
         // TODO: add a more generic warning for invalid values.
        if (Context._context !== undefined) {
            var realContext = Context._context; // Don't deduplicate because this legitimately causes bugs
            // and nobody should be using this in existing code.
            if (realContext.Consumer === Context) error1("Calling useContext(Context.Consumer) is not supported, may cause bugs, and will be removed in a future major release. Did you mean to call useContext(Context) instead?");
            else if (realContext.Provider === Context) error1("Calling useContext(Context.Provider) is not supported. Did you mean to call useContext(Context) instead?");
        }
        return dispatcher.useContext(Context, unstable_observedBits);
    }
    function useState(initialState) {
        var dispatcher = resolveDispatcher();
        return dispatcher.useState(initialState);
    }
    function useReducer(reducer, initialArg, init) {
        var dispatcher = resolveDispatcher();
        return dispatcher.useReducer(reducer, initialArg, init);
    }
    function useRef(initialValue) {
        var dispatcher = resolveDispatcher();
        return dispatcher.useRef(initialValue);
    }
    function useEffect(create, deps) {
        var dispatcher = resolveDispatcher();
        return dispatcher.useEffect(create, deps);
    }
    function useLayoutEffect(create, deps) {
        var dispatcher = resolveDispatcher();
        return dispatcher.useLayoutEffect(create, deps);
    }
    function useCallback(callback, deps) {
        var dispatcher = resolveDispatcher();
        return dispatcher.useCallback(callback, deps);
    }
    function useMemo(create, deps) {
        var dispatcher = resolveDispatcher();
        return dispatcher.useMemo(create, deps);
    }
    function useImperativeHandle(ref, create, deps) {
        var dispatcher = resolveDispatcher();
        return dispatcher.useImperativeHandle(ref, create, deps);
    }
    function useDebugValue(value, formatterFn) {
        var dispatcher = resolveDispatcher();
        return dispatcher.useDebugValue(value, formatterFn);
    }
    // Helpers to patch console.logs to avoid logging during side-effect free
    // replaying on render function. This currently only patches the object
    // lazily which won't cover if the log function was extracted eagerly.
    // We could also eagerly patch the method.
    var disabledDepth = 0;
    var prevLog;
    var prevInfo;
    var prevWarn;
    var prevError;
    var prevGroup;
    var prevGroupCollapsed;
    var prevGroupEnd;
    function disabledLog() {}
    disabledLog.__reactDisabledLog = true;
    function disableLogs() {
        if (disabledDepth === 0) {
            /* eslint-disable react-internal/no-production-logging */ prevLog = console.log;
            prevInfo = console.info;
            prevWarn = console.warn;
            prevError = console.error;
            prevGroup = console.group;
            prevGroupCollapsed = console.groupCollapsed;
            prevGroupEnd = console.groupEnd; // https://github.com/facebook/react/issues/19099
            var props = {
                configurable: true,
                enumerable: true,
                value: disabledLog,
                writable: true
            }; // $FlowFixMe Flow thinks console is immutable.
            Object.defineProperties(console, {
                info: props,
                log: props,
                warn: props,
                error: props,
                group: props,
                groupCollapsed: props,
                groupEnd: props
            });
        /* eslint-enable react-internal/no-production-logging */ }
        disabledDepth++;
    }
    function reenableLogs() {
        disabledDepth--;
        if (disabledDepth === 0) {
            /* eslint-disable react-internal/no-production-logging */ var props = {
                configurable: true,
                enumerable: true,
                writable: true
            }; // $FlowFixMe Flow thinks console is immutable.
            Object.defineProperties(console, {
                log: _assign({}, props, {
                    value: prevLog
                }),
                info: _assign({}, props, {
                    value: prevInfo
                }),
                warn: _assign({}, props, {
                    value: prevWarn
                }),
                error: _assign({}, props, {
                    value: prevError
                }),
                group: _assign({}, props, {
                    value: prevGroup
                }),
                groupCollapsed: _assign({}, props, {
                    value: prevGroupCollapsed
                }),
                groupEnd: _assign({}, props, {
                    value: prevGroupEnd
                })
            });
        /* eslint-enable react-internal/no-production-logging */ }
        if (disabledDepth < 0) error1("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
    }
    var ReactCurrentDispatcher$1 = ReactSharedInternals.ReactCurrentDispatcher;
    var prefix;
    function describeBuiltInComponentFrame(name, source, ownerFn) {
        if (prefix === undefined) // Extract the VM specific prefix used by each line.
        try {
            throw Error();
        } catch (x) {
            var match = x.stack.trim().match(/\n( *(at )?)/);
            prefix = match && match[1] || '';
        }
         // We use the prefix to ensure our stacks line up with native stack frames.
        return '\n' + prefix + name;
    }
    var reentry = false;
    var componentFrameCache;
    var PossiblyWeakMap = typeof WeakMap === 'function' ? WeakMap : Map;
    componentFrameCache = new PossiblyWeakMap();
    function describeNativeComponentFrame(fn, construct) {
        // If something asked for a stack inside a fake render, it should get ignored.
        if (!fn || reentry) return '';
        var frame = componentFrameCache.get(fn);
        if (frame !== undefined) return frame;
        var control;
        reentry = true;
        var previousPrepareStackTrace = Error.prepareStackTrace; // $FlowFixMe It does accept undefined.
        Error.prepareStackTrace = undefined;
        var previousDispatcher;
        previousDispatcher = ReactCurrentDispatcher$1.current; // Set the dispatcher in DEV because this might be call in the render function
        // for warnings.
        ReactCurrentDispatcher$1.current = null;
        disableLogs();
        try {
            // This should throw.
            if (construct) {
                // Something should be setting the props in the constructor.
                var Fake = function() {
                    throw Error();
                }; // $FlowFixMe
                Object.defineProperty(Fake.prototype, 'props', {
                    set: function() {
                        // We use a throwing setter instead of frozen or non-writable props
                        // because that won't throw in a non-strict mode function.
                        throw Error();
                    }
                });
                if (typeof Reflect === 'object' && Reflect.construct) {
                    // We construct a different control for this case to include any extra
                    // frames added by the construct call.
                    try {
                        Reflect.construct(Fake, []);
                    } catch (x) {
                        control = x;
                    }
                    Reflect.construct(fn, [], Fake);
                } else {
                    try {
                        Fake.call();
                    } catch (x) {
                        control = x;
                    }
                    fn.call(Fake.prototype);
                }
            } else {
                try {
                    throw Error();
                } catch (x) {
                    control = x;
                }
                fn();
            }
        } catch (sample) {
            // This is inlined manually because closure doesn't do it for us.
            if (sample && control && typeof sample.stack === 'string') {
                // This extracts the first frame from the sample that isn't also in the control.
                // Skipping one frame that we assume is the frame that calls the two.
                var sampleLines = sample.stack.split('\n');
                var controlLines = control.stack.split('\n');
                var s = sampleLines.length - 1;
                var c = controlLines.length - 1;
                while(s >= 1 && c >= 0 && sampleLines[s] !== controlLines[c])// We expect at least one stack frame to be shared.
                // Typically this will be the root most one. However, stack frames may be
                // cut off due to maximum stack limits. In this case, one maybe cut off
                // earlier than the other. We assume that the sample is longer or the same
                // and there for cut off earlier. So we should find the root most frame in
                // the sample somewhere in the control.
                c--;
                for(; s >= 1 && c >= 0; s--, c--)// Next we find the first one that isn't the same which should be the
                // frame that called our sample function and the control.
                if (sampleLines[s] !== controlLines[c]) {
                    // In V8, the first line is describing the message but other VMs don't.
                    // If we're about to return the first line, and the control is also on the same
                    // line, that's a pretty good indicator that our sample threw at same line as
                    // the control. I.e. before we entered the sample frame. So we ignore this result.
                    // This can happen if you passed a class to function component, or non-function.
                    if (s !== 1 || c !== 1) do {
                        s--;
                        c--; // We may still have similar intermediate frames from the construct call.
                        // The next one that isn't the same should be our match though.
                        if (c < 0 || sampleLines[s] !== controlLines[c]) {
                            // V8 adds a "new" prefix for native classes. Let's remove it to make it prettier.
                            var _frame = '\n' + sampleLines[s].replace(' at new ', ' at ');
                            if (typeof fn === 'function') componentFrameCache.set(fn, _frame);
                            return _frame;
                        }
                    }while (s >= 1 && c >= 0)
                    break;
                }
            }
        } finally{
            reentry = false;
            ReactCurrentDispatcher$1.current = previousDispatcher;
            reenableLogs();
            Error.prepareStackTrace = previousPrepareStackTrace;
        } // Fallback to just using the name if we couldn't make it throw.
        var name = fn ? fn.displayName || fn.name : '';
        var syntheticFrame = name ? describeBuiltInComponentFrame(name) : '';
        if (typeof fn === 'function') componentFrameCache.set(fn, syntheticFrame);
        return syntheticFrame;
    }
    function describeFunctionComponentFrame(fn, source, ownerFn) {
        return describeNativeComponentFrame(fn, false);
    }
    function shouldConstruct(Component) {
        var prototype = Component.prototype;
        return !!(prototype && prototype.isReactComponent);
    }
    function describeUnknownElementTypeFrameInDEV(type, source, ownerFn) {
        if (type == null) return '';
        if (typeof type === 'function') return describeNativeComponentFrame(type, shouldConstruct(type));
        if (typeof type === 'string') return describeBuiltInComponentFrame(type);
        switch(type){
            case exports.Suspense:
                return describeBuiltInComponentFrame('Suspense');
            case REACT_SUSPENSE_LIST_TYPE:
                return describeBuiltInComponentFrame('SuspenseList');
        }
        if (typeof type === 'object') switch(type.$$typeof){
            case REACT_FORWARD_REF_TYPE:
                return describeFunctionComponentFrame(type.render);
            case REACT_MEMO_TYPE:
                // Memo may contain any component type so we recursively resolve it.
                return describeUnknownElementTypeFrameInDEV(type.type, source, ownerFn);
            case REACT_BLOCK_TYPE:
                return describeFunctionComponentFrame(type._render);
            case REACT_LAZY_TYPE:
                var lazyComponent = type;
                var payload = lazyComponent._payload;
                var init = lazyComponent._init;
                try {
                    // Lazy may contain any component type so we recursively resolve it.
                    return describeUnknownElementTypeFrameInDEV(init(payload), source, ownerFn);
                } catch (x) {}
        }
        return '';
    }
    var loggedTypeFailures = {};
    var ReactDebugCurrentFrame$1 = ReactSharedInternals.ReactDebugCurrentFrame;
    function setCurrentlyValidatingElement(element) {
        if (element) {
            var owner = element._owner;
            var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
            ReactDebugCurrentFrame$1.setExtraStackFrame(stack);
        } else ReactDebugCurrentFrame$1.setExtraStackFrame(null);
    }
    function checkPropTypes(typeSpecs, values, location, componentName, element) {
        // $FlowFixMe This is okay but Flow doesn't know it.
        var has = Function.call.bind(Object.prototype.hasOwnProperty);
        for(var typeSpecName in typeSpecs)if (has(typeSpecs, typeSpecName)) {
            var error$1 = void 0; // Prop type validation may throw. In case they do, we don't want to
            // fail the render phase where it didn't fail before. So we log it.
            // After these have been cleaned up, we'll let them throw.
            try {
                // This is intentionally an invariant that gets caught. It's the same
                // behavior as without this statement except with a better message.
                if (typeof typeSpecs[typeSpecName] !== 'function') {
                    var err = Error((componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' + 'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.' + 'This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.');
                    err.name = 'Invariant Violation';
                    throw err;
                }
                error$1 = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED');
            } catch (ex) {
                error$1 = ex;
            }
            if (error$1 && !(error$1 instanceof Error)) {
                setCurrentlyValidatingElement(element);
                error1("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", componentName || 'React class', location, typeSpecName, typeof error$1);
                setCurrentlyValidatingElement(null);
            }
            if (error$1 instanceof Error && !(error$1.message in loggedTypeFailures)) {
                // Only monitor this failure once because there tends to be a lot of the
                // same error.
                loggedTypeFailures[error$1.message] = true;
                setCurrentlyValidatingElement(element);
                error1('Failed %s type: %s', location, error$1.message);
                setCurrentlyValidatingElement(null);
            }
        }
    }
    function setCurrentlyValidatingElement$1(element) {
        if (element) {
            var owner = element._owner;
            var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
            setExtraStackFrame(stack);
        } else setExtraStackFrame(null);
    }
    var propTypesMisspellWarningShown;
    propTypesMisspellWarningShown = false;
    function getDeclarationErrorAddendum() {
        if (ReactCurrentOwner.current) {
            var name = getComponentName(ReactCurrentOwner.current.type);
            if (name) return '\n\nCheck the render method of `' + name + '`.';
        }
        return '';
    }
    function getSourceInfoErrorAddendum(source) {
        if (source !== undefined) {
            var fileName = source.fileName.replace(/^.*[\\\/]/, '');
            var lineNumber = source.lineNumber;
            return '\n\nCheck your code at ' + fileName + ':' + lineNumber + '.';
        }
        return '';
    }
    function getSourceInfoErrorAddendumForProps(elementProps) {
        if (elementProps !== null && elementProps !== undefined) return getSourceInfoErrorAddendum(elementProps.__source);
        return '';
    }
    /**
 * Warn if there's no key explicitly set on dynamic arrays of children or
 * object keys are not valid. This allows us to keep track of children between
 * updates.
 */ var ownerHasKeyUseWarning = {};
    function getCurrentComponentErrorInfo(parentType) {
        var info = getDeclarationErrorAddendum();
        if (!info) {
            var parentName = typeof parentType === 'string' ? parentType : parentType.displayName || parentType.name;
            if (parentName) info = "\n\nCheck the top-level render call using <" + parentName + ">.";
        }
        return info;
    }
    /**
 * Warn if the element doesn't have an explicit key assigned to it.
 * This element is in an array. The array could grow and shrink or be
 * reordered. All children that haven't already been validated are required to
 * have a "key" property assigned to it. Error statuses are cached so a warning
 * will only be shown once.
 *
 * @internal
 * @param {ReactElement} element Element that requires a key.
 * @param {*} parentType element's parent's type.
 */ function validateExplicitKey(element, parentType) {
        if (!element._store || element._store.validated || element.key != null) return;
        element._store.validated = true;
        var currentComponentErrorInfo = getCurrentComponentErrorInfo(parentType);
        if (ownerHasKeyUseWarning[currentComponentErrorInfo]) return;
        ownerHasKeyUseWarning[currentComponentErrorInfo] = true; // Usually the current owner is the offender, but if it accepts children as a
        // property, it may be the creator of the child that's responsible for
        // assigning it a key.
        var childOwner = '';
        if (element && element._owner && element._owner !== ReactCurrentOwner.current) // Give the component that originally created this child.
        childOwner = " It was passed a child from " + getComponentName(element._owner.type) + ".";
        setCurrentlyValidatingElement$1(element);
        error1('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', currentComponentErrorInfo, childOwner);
        setCurrentlyValidatingElement$1(null);
    }
    /**
 * Ensure that every element either is passed in a static location, in an
 * array with an explicit keys property defined, or in an object literal
 * with valid key property.
 *
 * @internal
 * @param {ReactNode} node Statically passed child of any type.
 * @param {*} parentType node's parent's type.
 */ function validateChildKeys(node, parentType) {
        if (typeof node !== 'object') return;
        if (Array.isArray(node)) for(var i = 0; i < node.length; i++){
            var child = node[i];
            if (isValidElement(child)) validateExplicitKey(child, parentType);
        }
        else if (isValidElement(node)) // This element was passed in a valid location.
        {
            if (node._store) node._store.validated = true;
        } else if (node) {
            var iteratorFn = getIteratorFn(node);
            if (typeof iteratorFn === 'function') // Entry iterators used to provide implicit keys,
            // but now we print a separate warning for them later.
            {
                if (iteratorFn !== node.entries) {
                    var iterator = iteratorFn.call(node);
                    var step;
                    while(!(step = iterator.next()).done)if (isValidElement(step.value)) validateExplicitKey(step.value, parentType);
                }
            }
        }
    }
    /**
 * Given an element, validate that its props follow the propTypes definition,
 * provided by the type.
 *
 * @param {ReactElement} element
 */ function validatePropTypes(element) {
        var type = element.type;
        if (type === null || type === undefined || typeof type === 'string') return;
        var propTypes;
        if (typeof type === 'function') propTypes = type.propTypes;
        else if (typeof type === 'object' && (type.$$typeof === REACT_FORWARD_REF_TYPE || // Inner props are checked in the reconciler.
        type.$$typeof === REACT_MEMO_TYPE)) propTypes = type.propTypes;
        else return;
        if (propTypes) {
            // Intentionally inside to avoid triggering lazy initializers:
            var name = getComponentName(type);
            checkPropTypes(propTypes, element.props, 'prop', name, element);
        } else if (type.PropTypes !== undefined && !propTypesMisspellWarningShown) {
            propTypesMisspellWarningShown = true; // Intentionally inside to avoid triggering lazy initializers:
            var _name = getComponentName(type);
            error1('Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?', _name || 'Unknown');
        }
        if (typeof type.getDefaultProps === 'function' && !type.getDefaultProps.isReactClassApproved) error1("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
    }
    /**
 * Given a fragment, validate that it can only be provided with fragment props
 * @param {ReactElement} fragment
 */ function validateFragmentProps(fragment) {
        var keys = Object.keys(fragment.props);
        for(var i = 0; i < keys.length; i++){
            var key = keys[i];
            if (key !== 'children' && key !== 'key') {
                setCurrentlyValidatingElement$1(fragment);
                error1("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", key);
                setCurrentlyValidatingElement$1(null);
                break;
            }
        }
        if (fragment.ref !== null) {
            setCurrentlyValidatingElement$1(fragment);
            error1('Invalid attribute `ref` supplied to `React.Fragment`.');
            setCurrentlyValidatingElement$1(null);
        }
    }
    function createElementWithValidation(type, props, children) {
        var validType = isValidElementType(type); // We warn in this case but don't throw. We expect the element creation to
        // succeed and there will likely be errors in render.
        if (!validType) {
            var info = '';
            if (type === undefined || typeof type === 'object' && type !== null && Object.keys(type).length === 0) info += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.";
            var sourceInfo = getSourceInfoErrorAddendumForProps(props);
            if (sourceInfo) info += sourceInfo;
            else info += getDeclarationErrorAddendum();
            var typeString;
            if (type === null) typeString = 'null';
            else if (Array.isArray(type)) typeString = 'array';
            else if (type !== undefined && type.$$typeof === REACT_ELEMENT_TYPE) {
                typeString = "<" + (getComponentName(type.type) || 'Unknown') + " />";
                info = ' Did you accidentally export a JSX literal instead of a component?';
            } else typeString = typeof type;
            error1("React.createElement: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", typeString, info);
        }
        var element = createElement.apply(this, arguments); // The result can be nullish if a mock or a custom function is used.
        // TODO: Drop this when these are no longer allowed as the type argument.
        if (element == null) return element;
         // Skip key warning if the type isn't valid since our key validation logic
        // doesn't expect a non-string/function type and can throw confusing errors.
        // We don't want exception behavior to differ between dev and prod.
        // (Rendering will throw with a helpful message and as soon as the type is
        // fixed, the key warnings will appear.)
        if (validType) for(var i = 2; i < arguments.length; i++)validateChildKeys(arguments[i], type);
        if (type === exports.Fragment) validateFragmentProps(element);
        else validatePropTypes(element);
        return element;
    }
    var didWarnAboutDeprecatedCreateFactory = false;
    function createFactoryWithValidation(type) {
        var validatedFactory = createElementWithValidation.bind(null, type);
        validatedFactory.type = type;
        if (!didWarnAboutDeprecatedCreateFactory) {
            didWarnAboutDeprecatedCreateFactory = true;
            warn("React.createFactory() is deprecated and will be removed in a future major release. Consider using JSX or use React.createElement() directly instead.");
        } // Legacy hook: remove it
        Object.defineProperty(validatedFactory, 'type', {
            enumerable: false,
            get: function() {
                warn("Factory.type is deprecated. Access the class directly before passing it to createFactory.");
                Object.defineProperty(this, 'type', {
                    value: type
                });
                return type;
            }
        });
        return validatedFactory;
    }
    function cloneElementWithValidation(element, props, children) {
        var newElement = cloneElement.apply(this, arguments);
        for(var i = 2; i < arguments.length; i++)validateChildKeys(arguments[i], newElement.type);
        validatePropTypes(newElement);
        return newElement;
    }
    try {
        var frozenObject = Object.freeze({});
        /* eslint-disable no-new */ new Map([
            [
                frozenObject,
                null
            ]
        ]);
        new Set([
            frozenObject
        ]);
    /* eslint-enable no-new */ } catch (e) {}
    var createElement$1 = createElementWithValidation;
    var cloneElement$1 = cloneElementWithValidation;
    var createFactory = createFactoryWithValidation;
    var Children = {
        map: mapChildren,
        forEach: forEachChildren,
        count: countChildren,
        toArray: toArray,
        only: onlyChild
    };
    exports.Children = Children;
    exports.Component = Component1;
    exports.PureComponent = PureComponent;
    exports.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ReactSharedInternals;
    exports.cloneElement = cloneElement$1;
    exports.createContext = createContext;
    exports.createElement = createElement$1;
    exports.createFactory = createFactory;
    exports.createRef = createRef;
    exports.forwardRef = forwardRef;
    exports.isValidElement = isValidElement;
    exports.lazy = lazy;
    exports.memo = memo;
    exports.useCallback = useCallback;
    exports.useContext = useContext;
    exports.useDebugValue = useDebugValue;
    exports.useEffect = useEffect;
    exports.useImperativeHandle = useImperativeHandle;
    exports.useLayoutEffect = useLayoutEffect;
    exports.useMemo = useMemo;
    exports.useReducer = useReducer;
    exports.useRef = useRef;
    exports.useState = useState;
    exports.version = ReactVersion;
})();

},{"object-assign":"7OXxh"}],"7OXxh":[function(require,module,exports) {
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/ 'use strict';
/* eslint-disable no-unused-vars */ var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;
function toObject(val) {
    if (val === null || val === undefined) throw new TypeError('Object.assign cannot be called with null or undefined');
    return Object(val);
}
function shouldUseNative() {
    try {
        if (!Object.assign) return false;
        // Detect buggy property enumeration order in older V8 versions.
        // https://bugs.chromium.org/p/v8/issues/detail?id=4118
        var test1 = new String('abc'); // eslint-disable-line no-new-wrappers
        test1[5] = 'de';
        if (Object.getOwnPropertyNames(test1)[0] === '5') return false;
        // https://bugs.chromium.org/p/v8/issues/detail?id=3056
        var test2 = {};
        for(var i = 0; i < 10; i++)test2['_' + String.fromCharCode(i)] = i;
        var order2 = Object.getOwnPropertyNames(test2).map(function(n) {
            return test2[n];
        });
        if (order2.join('') !== '0123456789') return false;
        // https://bugs.chromium.org/p/v8/issues/detail?id=3056
        var test3 = {};
        'abcdefghijklmnopqrst'.split('').forEach(function(letter) {
            test3[letter] = letter;
        });
        if (Object.keys(Object.assign({}, test3)).join('') !== 'abcdefghijklmnopqrst') return false;
        return true;
    } catch (err) {
        // We don't expect any of the above to throw, but better to be safe.
        return false;
    }
}
module.exports = shouldUseNative() ? Object.assign : function(target, source) {
    var from;
    var to = toObject(target);
    var symbols;
    for(var s = 1; s < arguments.length; s++){
        from = Object(arguments[s]);
        for(var key in from)if (hasOwnProperty.call(from, key)) to[key] = from[key];
        if (getOwnPropertySymbols) {
            symbols = getOwnPropertySymbols(from);
            for(var i = 0; i < symbols.length; i++)if (propIsEnumerable.call(from, symbols[i])) to[symbols[i]] = from[symbols[i]];
        }
    }
    return to;
};

},{}],"fdOAw":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "MemoryRouter", ()=>_reactRouter.MemoryRouter
);
parcelHelpers.export(exports, "Navigate", ()=>_reactRouter.Navigate
);
parcelHelpers.export(exports, "NavigationType", ()=>_reactRouter.NavigationType
);
parcelHelpers.export(exports, "Outlet", ()=>_reactRouter.Outlet
);
parcelHelpers.export(exports, "Route", ()=>_reactRouter.Route
);
parcelHelpers.export(exports, "Router", ()=>_reactRouter.Router
);
parcelHelpers.export(exports, "Routes", ()=>_reactRouter.Routes
);
parcelHelpers.export(exports, "UNSAFE_LocationContext", ()=>_reactRouter.UNSAFE_LocationContext
);
parcelHelpers.export(exports, "UNSAFE_NavigationContext", ()=>_reactRouter.UNSAFE_NavigationContext
);
parcelHelpers.export(exports, "UNSAFE_RouteContext", ()=>_reactRouter.UNSAFE_RouteContext
);
parcelHelpers.export(exports, "createPath", ()=>_reactRouter.createPath
);
parcelHelpers.export(exports, "createRoutesFromChildren", ()=>_reactRouter.createRoutesFromChildren
);
parcelHelpers.export(exports, "generatePath", ()=>_reactRouter.generatePath
);
parcelHelpers.export(exports, "matchPath", ()=>_reactRouter.matchPath
);
parcelHelpers.export(exports, "matchRoutes", ()=>_reactRouter.matchRoutes
);
parcelHelpers.export(exports, "parsePath", ()=>_reactRouter.parsePath
);
parcelHelpers.export(exports, "renderMatches", ()=>_reactRouter.renderMatches
);
parcelHelpers.export(exports, "resolvePath", ()=>_reactRouter.resolvePath
);
parcelHelpers.export(exports, "useHref", ()=>_reactRouter.useHref
);
parcelHelpers.export(exports, "useInRouterContext", ()=>_reactRouter.useInRouterContext
);
parcelHelpers.export(exports, "useLocation", ()=>_reactRouter.useLocation
);
parcelHelpers.export(exports, "useMatch", ()=>_reactRouter.useMatch
);
parcelHelpers.export(exports, "useNavigate", ()=>_reactRouter.useNavigate
);
parcelHelpers.export(exports, "useNavigationType", ()=>_reactRouter.useNavigationType
);
parcelHelpers.export(exports, "useOutlet", ()=>_reactRouter.useOutlet
);
parcelHelpers.export(exports, "useOutletContext", ()=>_reactRouter.useOutletContext
);
parcelHelpers.export(exports, "useParams", ()=>_reactRouter.useParams
);
parcelHelpers.export(exports, "useResolvedPath", ()=>_reactRouter.useResolvedPath
);
parcelHelpers.export(exports, "useRoutes", ()=>_reactRouter.useRoutes
);
parcelHelpers.export(exports, "BrowserRouter", ()=>BrowserRouter
);
parcelHelpers.export(exports, "HashRouter", ()=>HashRouter
);
parcelHelpers.export(exports, "Link", ()=>Link
);
parcelHelpers.export(exports, "NavLink", ()=>NavLink
);
parcelHelpers.export(exports, "createSearchParams", ()=>createSearchParams
);
parcelHelpers.export(exports, "unstable_HistoryRouter", ()=>HistoryRouter
);
parcelHelpers.export(exports, "useLinkClickHandler", ()=>useLinkClickHandler
);
parcelHelpers.export(exports, "useSearchParams", ()=>useSearchParams
);
/**
 * React Router DOM v6.3.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ var _react = require("react");
var _history = require("history");
var _reactRouter = require("react-router");
function _extends() {
    _extends = Object.assign || function(target) {
        for(var i = 1; i < arguments.length; i++){
            var source = arguments[i];
            for(var key in source)if (Object.prototype.hasOwnProperty.call(source, key)) target[key] = source[key];
        }
        return target;
    };
    return _extends.apply(this, arguments);
}
function _objectWithoutPropertiesLoose(source, excluded) {
    if (source == null) return {};
    var target = {};
    var sourceKeys = Object.keys(source);
    var key, i;
    for(i = 0; i < sourceKeys.length; i++){
        key = sourceKeys[i];
        if (excluded.indexOf(key) >= 0) continue;
        target[key] = source[key];
    }
    return target;
}
const _excluded = [
    "onClick",
    "reloadDocument",
    "replace",
    "state",
    "target",
    "to"
], _excluded2 = [
    "aria-current",
    "caseSensitive",
    "className",
    "end",
    "style",
    "to",
    "children"
];
function warning(cond, message) {
    if (!cond) {
        // eslint-disable-next-line no-console
        if (typeof console !== "undefined") console.warn(message);
        try {
            // Welcome to debugging React Router!
            //
            // This error is thrown as a convenience so you can more easily
            // find the source for a warning that appears in the console by
            // enabling "pause on exceptions" in your JavaScript debugger.
            throw new Error(message); // eslint-disable-next-line no-empty
        } catch (e) {}
    }
} ////////////////////////////////////////////////////////////////////////////////
// COMPONENTS
////////////////////////////////////////////////////////////////////////////////
/**
 * A `<Router>` for use in web browsers. Provides the cleanest URLs.
 */ function BrowserRouter(_ref) {
    let { basename , children , window  } = _ref;
    let historyRef = _react.useRef();
    if (historyRef.current == null) historyRef.current = _history.createBrowserHistory({
        window
    });
    let history = historyRef.current;
    let [state, setState] = _react.useState({
        action: history.action,
        location: history.location
    });
    _react.useLayoutEffect(()=>history.listen(setState)
    , [
        history
    ]);
    return /*#__PURE__*/ _react.createElement(_reactRouter.Router, {
        basename: basename,
        children: children,
        location: state.location,
        navigationType: state.action,
        navigator: history
    });
}
/**
 * A `<Router>` for use in web browsers. Stores the location in the hash
 * portion of the URL so it is not sent to the server.
 */ function HashRouter(_ref2) {
    let { basename , children , window  } = _ref2;
    let historyRef = _react.useRef();
    if (historyRef.current == null) historyRef.current = _history.createHashHistory({
        window
    });
    let history = historyRef.current;
    let [state, setState] = _react.useState({
        action: history.action,
        location: history.location
    });
    _react.useLayoutEffect(()=>history.listen(setState)
    , [
        history
    ]);
    return /*#__PURE__*/ _react.createElement(_reactRouter.Router, {
        basename: basename,
        children: children,
        location: state.location,
        navigationType: state.action,
        navigator: history
    });
}
/**
 * A `<Router>` that accepts a pre-instantiated history object. It's important
 * to note that using your own history object is highly discouraged and may add
 * two versions of the history library to your bundles unless you use the same
 * version of the history library that React Router uses internally.
 */ function HistoryRouter(_ref3) {
    let { basename , children , history  } = _ref3;
    const [state, setState] = _react.useState({
        action: history.action,
        location: history.location
    });
    _react.useLayoutEffect(()=>history.listen(setState)
    , [
        history
    ]);
    return /*#__PURE__*/ _react.createElement(_reactRouter.Router, {
        basename: basename,
        children: children,
        location: state.location,
        navigationType: state.action,
        navigator: history
    });
}
HistoryRouter.displayName = "unstable_HistoryRouter";
function isModifiedEvent(event) {
    return !!(event.metaKey || event.altKey || event.ctrlKey || event.shiftKey);
}
/**
 * The public API for rendering a history-aware <a>.
 */ const Link = /*#__PURE__*/ _react.forwardRef(function LinkWithRef(_ref4, ref) {
    let { onClick , reloadDocument , replace =false , state , target , to  } = _ref4, rest = _objectWithoutPropertiesLoose(_ref4, _excluded);
    let href = _reactRouter.useHref(to);
    let internalOnClick = useLinkClickHandler(to, {
        replace,
        state,
        target
    });
    function handleClick(event) {
        if (onClick) onClick(event);
        if (!event.defaultPrevented && !reloadDocument) internalOnClick(event);
    }
    return(/*#__PURE__*/ // eslint-disable-next-line jsx-a11y/anchor-has-content
    _react.createElement("a", _extends({}, rest, {
        href: href,
        onClick: handleClick,
        ref: ref,
        target: target
    })));
});
Link.displayName = "Link";
/**
 * A <Link> wrapper that knows if it's "active" or not.
 */ const NavLink = /*#__PURE__*/ _react.forwardRef(function NavLinkWithRef(_ref5, ref) {
    let { "aria-current": ariaCurrentProp = "page" , caseSensitive =false , className: classNameProp = "" , end =false , style: styleProp , to , children  } = _ref5, rest = _objectWithoutPropertiesLoose(_ref5, _excluded2);
    let location = _reactRouter.useLocation();
    let path = _reactRouter.useResolvedPath(to);
    let locationPathname = location.pathname;
    let toPathname = path.pathname;
    if (!caseSensitive) {
        locationPathname = locationPathname.toLowerCase();
        toPathname = toPathname.toLowerCase();
    }
    let isActive = locationPathname === toPathname || !end && locationPathname.startsWith(toPathname) && locationPathname.charAt(toPathname.length) === "/";
    let ariaCurrent = isActive ? ariaCurrentProp : undefined;
    let className;
    if (typeof classNameProp === "function") className = classNameProp({
        isActive
    });
    else // If the className prop is not a function, we use a default `active`
    // class for <NavLink />s that are active. In v5 `active` was the default
    // value for `activeClassName`, but we are removing that API and can still
    // use the old default behavior for a cleaner upgrade path and keep the
    // simple styling rules working as they currently do.
    className = [
        classNameProp,
        isActive ? "active" : null
    ].filter(Boolean).join(" ");
    let style = typeof styleProp === "function" ? styleProp({
        isActive
    }) : styleProp;
    return /*#__PURE__*/ _react.createElement(Link, _extends({}, rest, {
        "aria-current": ariaCurrent,
        className: className,
        ref: ref,
        style: style,
        to: to
    }), typeof children === "function" ? children({
        isActive
    }) : children);
});
NavLink.displayName = "NavLink";
// HOOKS
////////////////////////////////////////////////////////////////////////////////
/**
 * Handles the click behavior for router `<Link>` components. This is useful if
 * you need to create custom `<Link>` components with the same click behavior we
 * use in our exported `<Link>`.
 */ function useLinkClickHandler(to, _temp) {
    let { target , replace: replaceProp , state  } = _temp === void 0 ? {} : _temp;
    let navigate = _reactRouter.useNavigate();
    let location = _reactRouter.useLocation();
    let path = _reactRouter.useResolvedPath(to);
    return _react.useCallback((event)=>{
        if (event.button === 0 && (!target || target === "_self") && !isModifiedEvent(event) // Ignore clicks with modifier keys
        ) {
            event.preventDefault(); // If the URL hasn't changed, a regular <a> will do a replace instead of
            // a push, so do the same here.
            let replace = !!replaceProp || _reactRouter.createPath(location) === _reactRouter.createPath(path);
            navigate(to, {
                replace,
                state
            });
        }
    }, [
        location,
        navigate,
        path,
        replaceProp,
        state,
        target,
        to
    ]);
}
/**
 * A convenient wrapper for reading and writing search parameters via the
 * URLSearchParams interface.
 */ function useSearchParams(defaultInit) {
    warning(typeof URLSearchParams !== "undefined", "You cannot use the `useSearchParams` hook in a browser that does not support the URLSearchParams API. If you need to support Internet Explorer 11, we recommend you load a polyfill such as https://github.com/ungap/url-search-params\n\nIf you're unsure how to load polyfills, we recommend you check out https://polyfill.io/v3/ which provides some recommendations about how to load polyfills only for users that need them, instead of for every user.");
    let defaultSearchParamsRef = _react.useRef(createSearchParams(defaultInit));
    let location = _reactRouter.useLocation();
    let searchParams1 = _react.useMemo(()=>{
        let searchParams = createSearchParams(location.search);
        for (let key of defaultSearchParamsRef.current.keys())if (!searchParams.has(key)) defaultSearchParamsRef.current.getAll(key).forEach((value)=>{
            searchParams.append(key, value);
        });
        return searchParams;
    }, [
        location.search
    ]);
    let navigate = _reactRouter.useNavigate();
    let setSearchParams = _react.useCallback((nextInit, navigateOptions)=>{
        navigate("?" + createSearchParams(nextInit), navigateOptions);
    }, [
        navigate
    ]);
    return [
        searchParams1,
        setSearchParams
    ];
}
/**
 * Creates a URLSearchParams object using the given initializer.
 *
 * This is identical to `new URLSearchParams(init)` except it also
 * supports arrays as values in the object form of the initializer
 * instead of just strings. This is convenient when you need multiple
 * values for a given key, but don't want to use an array initializer.
 *
 * For example, instead of:
 *
 *   let searchParams = new URLSearchParams([
 *     ['sort', 'name'],
 *     ['sort', 'price']
 *   ]);
 *
 * you can do:
 *
 *   let searchParams = createSearchParams({
 *     sort: ['name', 'price']
 *   });
 */ function createSearchParams(init) {
    if (init === void 0) init = "";
    return new URLSearchParams(typeof init === "string" || Array.isArray(init) || init instanceof URLSearchParams ? init : Object.keys(init).reduce((memo, key)=>{
        let value = init[key];
        return memo.concat(Array.isArray(value) ? value.map((v)=>[
                key,
                v
            ]
        ) : [
            [
                key,
                value
            ]
        ]);
    }, []));
}

},{"react":"21dqq","history":"iE5Zp","react-router":"btA8E","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"iE5Zp":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Action", ()=>Action
);
parcelHelpers.export(exports, "createBrowserHistory", ()=>createBrowserHistory
);
parcelHelpers.export(exports, "createHashHistory", ()=>createHashHistory
);
parcelHelpers.export(exports, "createMemoryHistory", ()=>createMemoryHistory
);
parcelHelpers.export(exports, "createPath", ()=>createPath
);
parcelHelpers.export(exports, "parsePath", ()=>parsePath
);
var _extends = require("@babel/runtime/helpers/esm/extends");
var _extendsDefault = parcelHelpers.interopDefault(_extends);
/**
 * Actions represent the type of change to a location value.
 *
 * @see https://github.com/remix-run/history/tree/main/docs/api-reference.md#action
 */ var Action;
(function(Action1) {
    /**
   * A POP indicates a change to an arbitrary index in the history stack, such
   * as a back or forward navigation. It does not describe the direction of the
   * navigation, only that the current index changed.
   *
   * Note: This is the default action for newly created history objects.
   */ Action1["Pop"] = "POP";
    /**
   * A PUSH indicates a new entry being added to the history stack, such as when
   * a link is clicked and a new page loads. When this happens, all subsequent
   * entries in the stack are lost.
   */ Action1["Push"] = "PUSH";
    /**
   * A REPLACE indicates the entry at the current index in the history stack
   * being replaced by a new one.
   */ Action1["Replace"] = "REPLACE";
})(Action || (Action = {}));
var readOnly = function(obj) {
    return Object.freeze(obj);
};
function warning(cond, message) {
    if (!cond) {
        // eslint-disable-next-line no-console
        if (typeof console !== 'undefined') console.warn(message);
        try {
            // Welcome to debugging history!
            //
            // This error is thrown as a convenience so you can more easily
            // find the source for a warning that appears in the console by
            // enabling "pause on exceptions" in your JavaScript debugger.
            throw new Error(message); // eslint-disable-next-line no-empty
        } catch (e) {}
    }
}
var BeforeUnloadEventType = 'beforeunload';
var HashChangeEventType = 'hashchange';
var PopStateEventType = 'popstate';
/**
 * Browser history stores the location in regular URLs. This is the standard for
 * most web apps, but it requires some configuration on the server to ensure you
 * serve the same app at multiple URLs.
 *
 * @see https://github.com/remix-run/history/tree/main/docs/api-reference.md#createbrowserhistory
 */ function createBrowserHistory(options) {
    if (options === void 0) options = {};
    var _options = options, _options$window = _options.window, window = _options$window === void 0 ? document.defaultView : _options$window;
    var globalHistory = window.history;
    function getIndexAndLocation() {
        var _window$location = window.location, pathname = _window$location.pathname, search = _window$location.search, hash = _window$location.hash;
        var state = globalHistory.state || {};
        return [
            state.idx,
            readOnly({
                pathname: pathname,
                search: search,
                hash: hash,
                state: state.usr || null,
                key: state.key || 'default'
            })
        ];
    }
    var blockedPopTx = null;
    function handlePop() {
        if (blockedPopTx) {
            blockers.call(blockedPopTx);
            blockedPopTx = null;
        } else {
            var nextAction = Action.Pop;
            var _getIndexAndLocation = getIndexAndLocation(), nextIndex = _getIndexAndLocation[0], nextLocation = _getIndexAndLocation[1];
            if (blockers.length) {
                if (nextIndex != null) {
                    var delta = index1 - nextIndex;
                    if (delta) {
                        // Revert the POP
                        blockedPopTx = {
                            action: nextAction,
                            location: nextLocation,
                            retry: function retry() {
                                go(delta * -1);
                            }
                        };
                        go(delta);
                    }
                } else warning(false, // detail and link to it here so people can understand better what
                // is going on and how to avoid it.
                "You are trying to block a POP navigation to a location that was not created by the history library. The block will fail silently in production, but in general you should do all navigation with the history library (instead of using window.history.pushState directly) to avoid this situation.");
            } else applyTx(nextAction);
        }
    }
    window.addEventListener(PopStateEventType, handlePop);
    var action1 = Action.Pop;
    var _getIndexAndLocation2 = getIndexAndLocation(), index1 = _getIndexAndLocation2[0], location1 = _getIndexAndLocation2[1];
    var listeners = createEvents();
    var blockers = createEvents();
    if (index1 == null) {
        index1 = 0;
        globalHistory.replaceState(_extendsDefault.default({}, globalHistory.state, {
            idx: index1
        }), '');
    }
    function createHref(to) {
        return typeof to === 'string' ? to : createPath(to);
    } // state defaults to `null` because `window.history.state` does
    function getNextLocation(to, state) {
        if (state === void 0) state = null;
        return readOnly(_extendsDefault.default({
            pathname: location1.pathname,
            hash: '',
            search: ''
        }, typeof to === 'string' ? parsePath(to) : to, {
            state: state,
            key: createKey()
        }));
    }
    function getHistoryStateAndUrl(nextLocation, index) {
        return [
            {
                usr: nextLocation.state,
                key: nextLocation.key,
                idx: index
            },
            createHref(nextLocation)
        ];
    }
    function allowTx(action, location, retry) {
        return !blockers.length || (blockers.call({
            action: action,
            location: location,
            retry: retry
        }), false);
    }
    function applyTx(nextAction) {
        action1 = nextAction;
        var _getIndexAndLocation3 = getIndexAndLocation();
        index1 = _getIndexAndLocation3[0];
        location1 = _getIndexAndLocation3[1];
        listeners.call({
            action: action1,
            location: location1
        });
    }
    function push(to, state) {
        var nextAction = Action.Push;
        var nextLocation = getNextLocation(to, state);
        function retry() {
            push(to, state);
        }
        if (allowTx(nextAction, nextLocation, retry)) {
            var _getHistoryStateAndUr = getHistoryStateAndUrl(nextLocation, index1 + 1), historyState = _getHistoryStateAndUr[0], url = _getHistoryStateAndUr[1]; // TODO: Support forced reloading
            // try...catch because iOS limits us to 100 pushState calls :/
            try {
                globalHistory.pushState(historyState, '', url);
            } catch (error) {
                // They are going to lose state here, but there is no real
                // way to warn them about it since the page will refresh...
                window.location.assign(url);
            }
            applyTx(nextAction);
        }
    }
    function replace(to, state) {
        var nextAction = Action.Replace;
        var nextLocation = getNextLocation(to, state);
        function retry() {
            replace(to, state);
        }
        if (allowTx(nextAction, nextLocation, retry)) {
            var _getHistoryStateAndUr2 = getHistoryStateAndUrl(nextLocation, index1), historyState = _getHistoryStateAndUr2[0], url = _getHistoryStateAndUr2[1]; // TODO: Support forced reloading
            globalHistory.replaceState(historyState, '', url);
            applyTx(nextAction);
        }
    }
    function go(delta) {
        globalHistory.go(delta);
    }
    var history = {
        get action () {
            return action1;
        },
        get location () {
            return location1;
        },
        createHref: createHref,
        push: push,
        replace: replace,
        go: go,
        back: function back() {
            go(-1);
        },
        forward: function forward() {
            go(1);
        },
        listen: function listen(listener) {
            return listeners.push(listener);
        },
        block: function block(blocker) {
            var unblock = blockers.push(blocker);
            if (blockers.length === 1) window.addEventListener(BeforeUnloadEventType, promptBeforeUnload);
            return function() {
                unblock(); // Remove the beforeunload listener so the document may
                // still be salvageable in the pagehide event.
                // See https://html.spec.whatwg.org/#unloading-documents
                if (!blockers.length) window.removeEventListener(BeforeUnloadEventType, promptBeforeUnload);
            };
        }
    };
    return history;
}
/**
 * Hash history stores the location in window.location.hash. This makes it ideal
 * for situations where you don't want to send the location to the server for
 * some reason, either because you do cannot configure it or the URL space is
 * reserved for something else.
 *
 * @see https://github.com/remix-run/history/tree/main/docs/api-reference.md#createhashhistory
 */ function createHashHistory(options) {
    if (options === void 0) options = {};
    var _options2 = options, _options2$window = _options2.window, window = _options2$window === void 0 ? document.defaultView : _options2$window;
    var globalHistory = window.history;
    function getIndexAndLocation() {
        var _parsePath = parsePath(window.location.hash.substr(1)), _parsePath$pathname = _parsePath.pathname, pathname = _parsePath$pathname === void 0 ? '/' : _parsePath$pathname, _parsePath$search = _parsePath.search, search = _parsePath$search === void 0 ? '' : _parsePath$search, _parsePath$hash = _parsePath.hash, hash = _parsePath$hash === void 0 ? '' : _parsePath$hash;
        var state = globalHistory.state || {};
        return [
            state.idx,
            readOnly({
                pathname: pathname,
                search: search,
                hash: hash,
                state: state.usr || null,
                key: state.key || 'default'
            })
        ];
    }
    var blockedPopTx = null;
    function handlePop() {
        if (blockedPopTx) {
            blockers.call(blockedPopTx);
            blockedPopTx = null;
        } else {
            var nextAction = Action.Pop;
            var _getIndexAndLocation4 = getIndexAndLocation(), nextIndex = _getIndexAndLocation4[0], nextLocation = _getIndexAndLocation4[1];
            if (blockers.length) {
                if (nextIndex != null) {
                    var delta = index2 - nextIndex;
                    if (delta) {
                        // Revert the POP
                        blockedPopTx = {
                            action: nextAction,
                            location: nextLocation,
                            retry: function retry() {
                                go(delta * -1);
                            }
                        };
                        go(delta);
                    }
                } else warning(false, // detail and link to it here so people can understand better
                // what is going on and how to avoid it.
                "You are trying to block a POP navigation to a location that was not created by the history library. The block will fail silently in production, but in general you should do all navigation with the history library (instead of using window.history.pushState directly) to avoid this situation.");
            } else applyTx(nextAction);
        }
    }
    window.addEventListener(PopStateEventType, handlePop); // popstate does not fire on hashchange in IE 11 and old (trident) Edge
    // https://developer.mozilla.org/de/docs/Web/API/Window/popstate_event
    window.addEventListener(HashChangeEventType, function() {
        var _getIndexAndLocation5 = getIndexAndLocation(), nextLocation = _getIndexAndLocation5[1]; // Ignore extraneous hashchange events.
        if (createPath(nextLocation) !== createPath(location2)) handlePop();
    });
    var action2 = Action.Pop;
    var _getIndexAndLocation6 = getIndexAndLocation(), index2 = _getIndexAndLocation6[0], location2 = _getIndexAndLocation6[1];
    var listeners = createEvents();
    var blockers = createEvents();
    if (index2 == null) {
        index2 = 0;
        globalHistory.replaceState(_extendsDefault.default({}, globalHistory.state, {
            idx: index2
        }), '');
    }
    function getBaseHref() {
        var base = document.querySelector('base');
        var href = '';
        if (base && base.getAttribute('href')) {
            var url = window.location.href;
            var hashIndex = url.indexOf('#');
            href = hashIndex === -1 ? url : url.slice(0, hashIndex);
        }
        return href;
    }
    function createHref(to) {
        return getBaseHref() + '#' + (typeof to === 'string' ? to : createPath(to));
    }
    function getNextLocation(to, state) {
        if (state === void 0) state = null;
        return readOnly(_extendsDefault.default({
            pathname: location2.pathname,
            hash: '',
            search: ''
        }, typeof to === 'string' ? parsePath(to) : to, {
            state: state,
            key: createKey()
        }));
    }
    function getHistoryStateAndUrl(nextLocation, index) {
        return [
            {
                usr: nextLocation.state,
                key: nextLocation.key,
                idx: index
            },
            createHref(nextLocation)
        ];
    }
    function allowTx(action, location, retry) {
        return !blockers.length || (blockers.call({
            action: action,
            location: location,
            retry: retry
        }), false);
    }
    function applyTx(nextAction) {
        action2 = nextAction;
        var _getIndexAndLocation7 = getIndexAndLocation();
        index2 = _getIndexAndLocation7[0];
        location2 = _getIndexAndLocation7[1];
        listeners.call({
            action: action2,
            location: location2
        });
    }
    function push(to, state) {
        var nextAction = Action.Push;
        var nextLocation = getNextLocation(to, state);
        function retry() {
            push(to, state);
        }
        warning(nextLocation.pathname.charAt(0) === '/', "Relative pathnames are not supported in hash history.push(" + JSON.stringify(to) + ")");
        if (allowTx(nextAction, nextLocation, retry)) {
            var _getHistoryStateAndUr3 = getHistoryStateAndUrl(nextLocation, index2 + 1), historyState = _getHistoryStateAndUr3[0], url = _getHistoryStateAndUr3[1]; // TODO: Support forced reloading
            // try...catch because iOS limits us to 100 pushState calls :/
            try {
                globalHistory.pushState(historyState, '', url);
            } catch (error) {
                // They are going to lose state here, but there is no real
                // way to warn them about it since the page will refresh...
                window.location.assign(url);
            }
            applyTx(nextAction);
        }
    }
    function replace(to, state) {
        var nextAction = Action.Replace;
        var nextLocation = getNextLocation(to, state);
        function retry() {
            replace(to, state);
        }
        warning(nextLocation.pathname.charAt(0) === '/', "Relative pathnames are not supported in hash history.replace(" + JSON.stringify(to) + ")");
        if (allowTx(nextAction, nextLocation, retry)) {
            var _getHistoryStateAndUr4 = getHistoryStateAndUrl(nextLocation, index2), historyState = _getHistoryStateAndUr4[0], url = _getHistoryStateAndUr4[1]; // TODO: Support forced reloading
            globalHistory.replaceState(historyState, '', url);
            applyTx(nextAction);
        }
    }
    function go(delta) {
        globalHistory.go(delta);
    }
    var history = {
        get action () {
            return action2;
        },
        get location () {
            return location2;
        },
        createHref: createHref,
        push: push,
        replace: replace,
        go: go,
        back: function back() {
            go(-1);
        },
        forward: function forward() {
            go(1);
        },
        listen: function listen(listener) {
            return listeners.push(listener);
        },
        block: function block(blocker) {
            var unblock = blockers.push(blocker);
            if (blockers.length === 1) window.addEventListener(BeforeUnloadEventType, promptBeforeUnload);
            return function() {
                unblock(); // Remove the beforeunload listener so the document may
                // still be salvageable in the pagehide event.
                // See https://html.spec.whatwg.org/#unloading-documents
                if (!blockers.length) window.removeEventListener(BeforeUnloadEventType, promptBeforeUnload);
            };
        }
    };
    return history;
}
/**
 * Memory history stores the current location in memory. It is designed for use
 * in stateful non-browser environments like tests and React Native.
 *
 * @see https://github.com/remix-run/history/tree/main/docs/api-reference.md#creatememoryhistory
 */ function createMemoryHistory(options) {
    if (options === void 0) options = {};
    var _options3 = options, _options3$initialEntr = _options3.initialEntries, initialEntries = _options3$initialEntr === void 0 ? [
        '/'
    ] : _options3$initialEntr, initialIndex = _options3.initialIndex;
    var entries = initialEntries.map(function(entry) {
        var location = readOnly(_extendsDefault.default({
            pathname: '/',
            search: '',
            hash: '',
            state: null,
            key: createKey()
        }, typeof entry === 'string' ? parsePath(entry) : entry));
        warning(location.pathname.charAt(0) === '/', "Relative pathnames are not supported in createMemoryHistory({ initialEntries }) (invalid entry: " + JSON.stringify(entry) + ")");
        return location;
    });
    var index = clamp(initialIndex == null ? entries.length - 1 : initialIndex, 0, entries.length - 1);
    var action3 = Action.Pop;
    var location3 = entries[index];
    var listeners = createEvents();
    var blockers = createEvents();
    function createHref(to) {
        return typeof to === 'string' ? to : createPath(to);
    }
    function getNextLocation(to, state) {
        if (state === void 0) state = null;
        return readOnly(_extendsDefault.default({
            pathname: location3.pathname,
            search: '',
            hash: ''
        }, typeof to === 'string' ? parsePath(to) : to, {
            state: state,
            key: createKey()
        }));
    }
    function allowTx(action, location, retry) {
        return !blockers.length || (blockers.call({
            action: action,
            location: location,
            retry: retry
        }), false);
    }
    function applyTx(nextAction, nextLocation) {
        action3 = nextAction;
        location3 = nextLocation;
        listeners.call({
            action: action3,
            location: location3
        });
    }
    function push(to, state) {
        var nextAction = Action.Push;
        var nextLocation = getNextLocation(to, state);
        function retry() {
            push(to, state);
        }
        warning(location3.pathname.charAt(0) === '/', "Relative pathnames are not supported in memory history.push(" + JSON.stringify(to) + ")");
        if (allowTx(nextAction, nextLocation, retry)) {
            index += 1;
            entries.splice(index, entries.length, nextLocation);
            applyTx(nextAction, nextLocation);
        }
    }
    function replace(to, state) {
        var nextAction = Action.Replace;
        var nextLocation = getNextLocation(to, state);
        function retry() {
            replace(to, state);
        }
        warning(location3.pathname.charAt(0) === '/', "Relative pathnames are not supported in memory history.replace(" + JSON.stringify(to) + ")");
        if (allowTx(nextAction, nextLocation, retry)) {
            entries[index] = nextLocation;
            applyTx(nextAction, nextLocation);
        }
    }
    function go(delta) {
        var nextIndex = clamp(index + delta, 0, entries.length - 1);
        var nextAction = Action.Pop;
        var nextLocation = entries[nextIndex];
        function retry() {
            go(delta);
        }
        if (allowTx(nextAction, nextLocation, retry)) {
            index = nextIndex;
            applyTx(nextAction, nextLocation);
        }
    }
    var history = {
        get index () {
            return index;
        },
        get action () {
            return action3;
        },
        get location () {
            return location3;
        },
        createHref: createHref,
        push: push,
        replace: replace,
        go: go,
        back: function back() {
            go(-1);
        },
        forward: function forward() {
            go(1);
        },
        listen: function listen(listener) {
            return listeners.push(listener);
        },
        block: function block(blocker) {
            return blockers.push(blocker);
        }
    };
    return history;
} ////////////////////////////////////////////////////////////////////////////////
// UTILS
////////////////////////////////////////////////////////////////////////////////
function clamp(n, lowerBound, upperBound) {
    return Math.min(Math.max(n, lowerBound), upperBound);
}
function promptBeforeUnload(event) {
    // Cancel the event.
    event.preventDefault(); // Chrome (and legacy IE) requires returnValue to be set.
    event.returnValue = '';
}
function createEvents() {
    var handlers = [];
    return {
        get length () {
            return handlers.length;
        },
        push: function push(fn) {
            handlers.push(fn);
            return function() {
                handlers = handlers.filter(function(handler) {
                    return handler !== fn;
                });
            };
        },
        call: function call(arg) {
            handlers.forEach(function(fn) {
                return fn && fn(arg);
            });
        }
    };
}
function createKey() {
    return Math.random().toString(36).substr(2, 8);
}
/**
 * Creates a string URL path from the given pathname, search, and hash components.
 *
 * @see https://github.com/remix-run/history/tree/main/docs/api-reference.md#createpath
 */ function createPath(_ref) {
    var _ref$pathname = _ref.pathname, pathname = _ref$pathname === void 0 ? '/' : _ref$pathname, _ref$search = _ref.search, search = _ref$search === void 0 ? '' : _ref$search, _ref$hash = _ref.hash, hash = _ref$hash === void 0 ? '' : _ref$hash;
    if (search && search !== '?') pathname += search.charAt(0) === '?' ? search : '?' + search;
    if (hash && hash !== '#') pathname += hash.charAt(0) === '#' ? hash : '#' + hash;
    return pathname;
}
/**
 * Parses a string URL path into its separate pathname, search, and hash components.
 *
 * @see https://github.com/remix-run/history/tree/main/docs/api-reference.md#parsepath
 */ function parsePath(path) {
    var parsedPath = {};
    if (path) {
        var hashIndex = path.indexOf('#');
        if (hashIndex >= 0) {
            parsedPath.hash = path.substr(hashIndex);
            path = path.substr(0, hashIndex);
        }
        var searchIndex = path.indexOf('?');
        if (searchIndex >= 0) {
            parsedPath.search = path.substr(searchIndex);
            path = path.substr(0, searchIndex);
        }
        if (path) parsedPath.pathname = path;
    }
    return parsedPath;
}

},{"@babel/runtime/helpers/esm/extends":"fTBFS","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"fTBFS":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function _extends() {
    _extends = Object.assign || function(target) {
        for(var i = 1; i < arguments.length; i++){
            var source = arguments[i];
            for(var key in source)if (Object.prototype.hasOwnProperty.call(source, key)) target[key] = source[key];
        }
        return target;
    };
    return _extends.apply(this, arguments);
}
exports.default = _extends;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, '__esModule', {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === 'default' || key === '__esModule' || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"btA8E":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "NavigationType", ()=>_history.Action
);
parcelHelpers.export(exports, "createPath", ()=>_history.createPath
);
parcelHelpers.export(exports, "parsePath", ()=>_history.parsePath
);
parcelHelpers.export(exports, "MemoryRouter", ()=>MemoryRouter
);
parcelHelpers.export(exports, "Navigate", ()=>Navigate
);
parcelHelpers.export(exports, "Outlet", ()=>Outlet
);
parcelHelpers.export(exports, "Route", ()=>Route
);
parcelHelpers.export(exports, "Router", ()=>Router
);
parcelHelpers.export(exports, "Routes", ()=>Routes
);
parcelHelpers.export(exports, "UNSAFE_LocationContext", ()=>LocationContext
);
parcelHelpers.export(exports, "UNSAFE_NavigationContext", ()=>NavigationContext
);
parcelHelpers.export(exports, "UNSAFE_RouteContext", ()=>RouteContext
);
parcelHelpers.export(exports, "createRoutesFromChildren", ()=>createRoutesFromChildren
);
parcelHelpers.export(exports, "generatePath", ()=>generatePath
);
parcelHelpers.export(exports, "matchPath", ()=>matchPath
);
parcelHelpers.export(exports, "matchRoutes", ()=>matchRoutes
);
parcelHelpers.export(exports, "renderMatches", ()=>renderMatches
);
parcelHelpers.export(exports, "resolvePath", ()=>resolvePath
);
parcelHelpers.export(exports, "useHref", ()=>useHref
);
parcelHelpers.export(exports, "useInRouterContext", ()=>useInRouterContext
);
parcelHelpers.export(exports, "useLocation", ()=>useLocation
);
parcelHelpers.export(exports, "useMatch", ()=>useMatch
);
parcelHelpers.export(exports, "useNavigate", ()=>useNavigate
);
parcelHelpers.export(exports, "useNavigationType", ()=>useNavigationType
);
parcelHelpers.export(exports, "useOutlet", ()=>useOutlet
);
parcelHelpers.export(exports, "useOutletContext", ()=>useOutletContext
);
parcelHelpers.export(exports, "useParams", ()=>useParams
);
parcelHelpers.export(exports, "useResolvedPath", ()=>useResolvedPath
);
parcelHelpers.export(exports, "useRoutes", ()=>useRoutes
);
/**
 * React Router v6.3.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ var _history = require("history");
var _react = require("react");
const NavigationContext = /*#__PURE__*/ _react.createContext(null);
NavigationContext.displayName = "Navigation";
const LocationContext = /*#__PURE__*/ _react.createContext(null);
LocationContext.displayName = "Location";
const RouteContext = /*#__PURE__*/ _react.createContext({
    outlet: null,
    matches: []
});
RouteContext.displayName = "Route";
function invariant(cond, message) {
    if (!cond) throw new Error(message);
}
function warning(cond, message) {
    if (!cond) {
        // eslint-disable-next-line no-console
        if (typeof console !== "undefined") console.warn(message);
        try {
            // Welcome to debugging React Router!
            //
            // This error is thrown as a convenience so you can more easily
            // find the source for a warning that appears in the console by
            // enabling "pause on exceptions" in your JavaScript debugger.
            throw new Error(message); // eslint-disable-next-line no-empty
        } catch (e) {}
    }
}
const alreadyWarned = {};
function warningOnce(key, cond, message) {
    if (!cond && !alreadyWarned[key]) {
        alreadyWarned[key] = true;
        warning(false, message);
    }
}
/**
 * Returns a path with params interpolated.
 *
 * @see https://reactrouter.com/docs/en/v6/api#generatepath
 */ function generatePath(path, params) {
    if (params === void 0) params = {};
    return path.replace(/:(\w+)/g, (_, key)=>{
        !(params[key] != null) && invariant(false, "Missing \":" + key + "\" param");
        return params[key];
    }).replace(/\/*\*$/, (_)=>params["*"] == null ? "" : params["*"].replace(/^\/*/, "/")
    );
}
/**
 * A RouteMatch contains info about how a route matched a URL.
 */ /**
 * Matches the given routes to a location and returns the match data.
 *
 * @see https://reactrouter.com/docs/en/v6/api#matchroutes
 */ function matchRoutes(routes, locationArg, basename) {
    if (basename === void 0) basename = "/";
    let location = typeof locationArg === "string" ? _history.parsePath(locationArg) : locationArg;
    let pathname = stripBasename(location.pathname || "/", basename);
    if (pathname == null) return null;
    let branches = flattenRoutes(routes);
    rankRouteBranches(branches);
    let matches = null;
    for(let i = 0; matches == null && i < branches.length; ++i)matches = matchRouteBranch(branches[i], pathname);
    return matches;
}
function flattenRoutes(routes, branches, parentsMeta, parentPath) {
    if (branches === void 0) branches = [];
    if (parentsMeta === void 0) parentsMeta = [];
    if (parentPath === void 0) parentPath = "";
    routes.forEach((route, index)=>{
        let meta = {
            relativePath: route.path || "",
            caseSensitive: route.caseSensitive === true,
            childrenIndex: index,
            route
        };
        if (meta.relativePath.startsWith("/")) {
            !meta.relativePath.startsWith(parentPath) && invariant(false, "Absolute route path \"" + meta.relativePath + "\" nested under path " + ("\"" + parentPath + "\" is not valid. An absolute child route path ") + "must start with the combined path of all its parent routes.");
            meta.relativePath = meta.relativePath.slice(parentPath.length);
        }
        let path = joinPaths([
            parentPath,
            meta.relativePath
        ]);
        let routesMeta = parentsMeta.concat(meta); // Add the children before adding this route to the array so we traverse the
        // route tree depth-first and child routes appear before their parents in
        // the "flattened" version.
        if (route.children && route.children.length > 0) {
            !(route.index !== true) && invariant(false, "Index routes must not have child routes. Please remove " + ("all child routes from route path \"" + path + "\"."));
            flattenRoutes(route.children, branches, routesMeta, path);
        } // Routes without a path shouldn't ever match by themselves unless they are
        // index routes, so don't add them to the list of possible branches.
        if (route.path == null && !route.index) return;
        branches.push({
            path,
            score: computeScore(path, route.index),
            routesMeta
        });
    });
    return branches;
}
function rankRouteBranches(branches) {
    branches.sort((a, b)=>a.score !== b.score ? b.score - a.score // Higher score first
         : compareIndexes(a.routesMeta.map((meta)=>meta.childrenIndex
        ), b.routesMeta.map((meta)=>meta.childrenIndex
        ))
    );
}
const paramRe = /^:\w+$/;
const dynamicSegmentValue = 3;
const indexRouteValue = 2;
const emptySegmentValue = 1;
const staticSegmentValue = 10;
const splatPenalty = -2;
const isSplat = (s)=>s === "*"
;
function computeScore(path, index) {
    let segments = path.split("/");
    let initialScore = segments.length;
    if (segments.some(isSplat)) initialScore += splatPenalty;
    if (index) initialScore += indexRouteValue;
    return segments.filter((s)=>!isSplat(s)
    ).reduce((score, segment)=>score + (paramRe.test(segment) ? dynamicSegmentValue : segment === "" ? emptySegmentValue : staticSegmentValue)
    , initialScore);
}
function compareIndexes(a, b) {
    let siblings = a.length === b.length && a.slice(0, -1).every((n, i)=>n === b[i]
    );
    return siblings ? // first. This allows people to have fine-grained control over the matching
    // behavior by simply putting routes with identical paths in the order they
    // want them tried.
    a[a.length - 1] - b[b.length - 1] : // so they sort equally.
    0;
}
function matchRouteBranch(branch, pathname) {
    let { routesMeta  } = branch;
    let matchedParams = {};
    let matchedPathname = "/";
    let matches = [];
    for(let i = 0; i < routesMeta.length; ++i){
        let meta = routesMeta[i];
        let end = i === routesMeta.length - 1;
        let remainingPathname = matchedPathname === "/" ? pathname : pathname.slice(matchedPathname.length) || "/";
        let match = matchPath({
            path: meta.relativePath,
            caseSensitive: meta.caseSensitive,
            end
        }, remainingPathname);
        if (!match) return null;
        Object.assign(matchedParams, match.params);
        let route = meta.route;
        matches.push({
            params: matchedParams,
            pathname: joinPaths([
                matchedPathname,
                match.pathname
            ]),
            pathnameBase: normalizePathname(joinPaths([
                matchedPathname,
                match.pathnameBase
            ])),
            route
        });
        if (match.pathnameBase !== "/") matchedPathname = joinPaths([
            matchedPathname,
            match.pathnameBase
        ]);
    }
    return matches;
}
/**
 * A PathPattern is used to match on some portion of a URL pathname.
 */ /**
 * Performs pattern matching on a URL pathname and returns information about
 * the match.
 *
 * @see https://reactrouter.com/docs/en/v6/api#matchpath
 */ function matchPath(pattern, pathname) {
    if (typeof pattern === "string") pattern = {
        path: pattern,
        caseSensitive: false,
        end: true
    };
    let [matcher, paramNames] = compilePath(pattern.path, pattern.caseSensitive, pattern.end);
    let match = pathname.match(matcher);
    if (!match) return null;
    let matchedPathname = match[0];
    let pathnameBase = matchedPathname.replace(/(.)\/+$/, "$1");
    let captureGroups = match.slice(1);
    let params = paramNames.reduce((memo, paramName, index)=>{
        // We need to compute the pathnameBase here using the raw splat value
        // instead of using params["*"] later because it will be decoded then
        if (paramName === "*") {
            let splatValue = captureGroups[index] || "";
            pathnameBase = matchedPathname.slice(0, matchedPathname.length - splatValue.length).replace(/(.)\/+$/, "$1");
        }
        memo[paramName] = safelyDecodeURIComponent(captureGroups[index] || "", paramName);
        return memo;
    }, {});
    return {
        params,
        pathname: matchedPathname,
        pathnameBase,
        pattern
    };
}
function compilePath(path, caseSensitive, end) {
    if (caseSensitive === void 0) caseSensitive = false;
    if (end === void 0) end = true;
    warning(path === "*" || !path.endsWith("*") || path.endsWith("/*"), "Route path \"" + path + "\" will be treated as if it were " + ("\"" + path.replace(/\*$/, "/*") + "\" because the `*` character must ") + "always follow a `/` in the pattern. To get rid of this warning, " + ("please change the route path to \"" + path.replace(/\*$/, "/*") + "\"."));
    let paramNames = [];
    let regexpSource = "^" + path.replace(/\/*\*?$/, "") // Ignore trailing / and /*, we'll handle it below
    .replace(/^\/*/, "/") // Make sure it has a leading /
    .replace(/[\\.*+^$?{}|()[\]]/g, "\\$&") // Escape special regex chars
    .replace(/:(\w+)/g, (_, paramName)=>{
        paramNames.push(paramName);
        return "([^\\/]+)";
    });
    if (path.endsWith("*")) {
        paramNames.push("*");
        regexpSource += path === "*" || path === "/*" ? "(.*)$" // Already matched the initial /, just match the rest
         : "(?:\\/(.+)|\\/*)$"; // Don't include the / in params["*"]
    } else regexpSource += end ? "\\/*$" // When matching to the end, ignore trailing slashes
     : // parent routes to matching only their own words and nothing more, e.g. parent
    // route "/home" should not match "/home2".
    // Additionally, allow paths starting with `.`, `-`, `~`, and url-encoded entities,
    // but do not consume the character in the matched path so they can match against
    // nested paths.
    "(?:(?=[.~-]|%[0-9A-F]{2})|\\b|\\/|$)";
    let matcher = new RegExp(regexpSource, caseSensitive ? undefined : "i");
    return [
        matcher,
        paramNames
    ];
}
function safelyDecodeURIComponent(value, paramName) {
    try {
        return decodeURIComponent(value);
    } catch (error) {
        warning(false, "The value for the URL param \"" + paramName + "\" will not be decoded because" + (" the string \"" + value + "\" is a malformed URL segment. This is probably") + (" due to a bad percent encoding (" + error + ")."));
        return value;
    }
}
/**
 * Returns a resolved path object relative to the given pathname.
 *
 * @see https://reactrouter.com/docs/en/v6/api#resolvepath
 */ function resolvePath(to, fromPathname) {
    if (fromPathname === void 0) fromPathname = "/";
    let { pathname: toPathname , search ="" , hash =""  } = typeof to === "string" ? _history.parsePath(to) : to;
    let pathname = toPathname ? toPathname.startsWith("/") ? toPathname : resolvePathname(toPathname, fromPathname) : fromPathname;
    return {
        pathname,
        search: normalizeSearch(search),
        hash: normalizeHash(hash)
    };
}
function resolvePathname(relativePath, fromPathname) {
    let segments = fromPathname.replace(/\/+$/, "").split("/");
    let relativeSegments = relativePath.split("/");
    relativeSegments.forEach((segment)=>{
        if (segment === "..") // Keep the root "" segment so the pathname starts at /
        {
            if (segments.length > 1) segments.pop();
        } else if (segment !== ".") segments.push(segment);
    });
    return segments.length > 1 ? segments.join("/") : "/";
}
function resolveTo(toArg, routePathnames, locationPathname) {
    let to = typeof toArg === "string" ? _history.parsePath(toArg) : toArg;
    let toPathname = toArg === "" || to.pathname === "" ? "/" : to.pathname; // If a pathname is explicitly provided in `to`, it should be relative to the
    // route context. This is explained in `Note on `<Link to>` values` in our
    // migration guide from v5 as a means of disambiguation between `to` values
    // that begin with `/` and those that do not. However, this is problematic for
    // `to` values that do not provide a pathname. `to` can simply be a search or
    // hash string, in which case we should assume that the navigation is relative
    // to the current location's pathname and *not* the route pathname.
    let from;
    if (toPathname == null) from = locationPathname;
    else {
        let routePathnameIndex = routePathnames.length - 1;
        if (toPathname.startsWith("..")) {
            let toSegments = toPathname.split("/"); // Each leading .. segment means "go up one route" instead of "go up one
            // URL segment".  This is a key difference from how <a href> works and a
            // major reason we call this a "to" value instead of a "href".
            while(toSegments[0] === ".."){
                toSegments.shift();
                routePathnameIndex -= 1;
            }
            to.pathname = toSegments.join("/");
        } // If there are more ".." segments than parent routes, resolve relative to
        // the root / URL.
        from = routePathnameIndex >= 0 ? routePathnames[routePathnameIndex] : "/";
    }
    let path = resolvePath(to, from); // Ensure the pathname has a trailing slash if the original to value had one.
    if (toPathname && toPathname !== "/" && toPathname.endsWith("/") && !path.pathname.endsWith("/")) path.pathname += "/";
    return path;
}
function getToPathname(to) {
    // Empty strings should be treated the same as / paths
    return to === "" || to.pathname === "" ? "/" : typeof to === "string" ? _history.parsePath(to).pathname : to.pathname;
}
function stripBasename(pathname, basename) {
    if (basename === "/") return pathname;
    if (!pathname.toLowerCase().startsWith(basename.toLowerCase())) return null;
    let nextChar = pathname.charAt(basename.length);
    if (nextChar && nextChar !== "/") // pathname does not start with basename/
    return null;
    return pathname.slice(basename.length) || "/";
}
const joinPaths = (paths)=>paths.join("/").replace(/\/\/+/g, "/")
;
const normalizePathname = (pathname)=>pathname.replace(/\/+$/, "").replace(/^\/*/, "/")
;
const normalizeSearch = (search)=>!search || search === "?" ? "" : search.startsWith("?") ? search : "?" + search
;
const normalizeHash = (hash)=>!hash || hash === "#" ? "" : hash.startsWith("#") ? hash : "#" + hash
;
/**
 * Returns the full href for the given "to" value. This is useful for building
 * custom links that are also accessible and preserve right-click behavior.
 *
 * @see https://reactrouter.com/docs/en/v6/api#usehref
 */ function useHref(to) {
    !useInRouterContext() && invariant(false, // router loaded. We can help them understand how to avoid that.
    "useHref() may be used only in the context of a <Router> component.");
    let { basename , navigator  } = _react.useContext(NavigationContext);
    let { hash , pathname , search  } = useResolvedPath(to);
    let joinedPathname = pathname;
    if (basename !== "/") {
        let toPathname = getToPathname(to);
        let endsWithSlash = toPathname != null && toPathname.endsWith("/");
        joinedPathname = pathname === "/" ? basename + (endsWithSlash ? "/" : "") : joinPaths([
            basename,
            pathname
        ]);
    }
    return navigator.createHref({
        pathname: joinedPathname,
        search,
        hash
    });
}
/**
 * Returns true if this component is a descendant of a <Router>.
 *
 * @see https://reactrouter.com/docs/en/v6/api#useinroutercontext
 */ function useInRouterContext() {
    return _react.useContext(LocationContext) != null;
}
/**
 * Returns the current location object, which represents the current URL in web
 * browsers.
 *
 * Note: If you're using this it may mean you're doing some of your own
 * "routing" in your app, and we'd like to know what your use case is. We may
 * be able to provide something higher-level to better suit your needs.
 *
 * @see https://reactrouter.com/docs/en/v6/api#uselocation
 */ function useLocation() {
    !useInRouterContext() && invariant(false, // router loaded. We can help them understand how to avoid that.
    "useLocation() may be used only in the context of a <Router> component.");
    return _react.useContext(LocationContext).location;
}
/**
 * Returns the current navigation action which describes how the router came to
 * the current location, either by a pop, push, or replace on the history stack.
 *
 * @see https://reactrouter.com/docs/en/v6/api#usenavigationtype
 */ function useNavigationType() {
    return _react.useContext(LocationContext).navigationType;
}
/**
 * Returns true if the URL for the given "to" value matches the current URL.
 * This is useful for components that need to know "active" state, e.g.
 * <NavLink>.
 *
 * @see https://reactrouter.com/docs/en/v6/api#usematch
 */ function useMatch(pattern) {
    !useInRouterContext() && invariant(false, // router loaded. We can help them understand how to avoid that.
    "useMatch() may be used only in the context of a <Router> component.");
    let { pathname  } = useLocation();
    return _react.useMemo(()=>matchPath(pattern, pathname)
    , [
        pathname,
        pattern
    ]);
}
/**
 * The interface for the navigate() function returned from useNavigate().
 */ /**
 * Returns an imperative method for changing the location. Used by <Link>s, but
 * may also be used by other elements to change the location.
 *
 * @see https://reactrouter.com/docs/en/v6/api#usenavigate
 */ function useNavigate() {
    !useInRouterContext() && invariant(false, // router loaded. We can help them understand how to avoid that.
    "useNavigate() may be used only in the context of a <Router> component.");
    let { basename , navigator  } = _react.useContext(NavigationContext);
    let { matches  } = _react.useContext(RouteContext);
    let { pathname: locationPathname  } = useLocation();
    let routePathnamesJson = JSON.stringify(matches.map((match)=>match.pathnameBase
    ));
    let activeRef = _react.useRef(false);
    _react.useEffect(()=>{
        activeRef.current = true;
    });
    let navigate = _react.useCallback(function(to, options) {
        if (options === void 0) options = {};
        warning(activeRef.current, "You should call navigate() in a React.useEffect(), not when your component is first rendered.");
        if (!activeRef.current) return;
        if (typeof to === "number") {
            navigator.go(to);
            return;
        }
        let path = resolveTo(to, JSON.parse(routePathnamesJson), locationPathname);
        if (basename !== "/") path.pathname = joinPaths([
            basename,
            path.pathname
        ]);
        (!!options.replace ? navigator.replace : navigator.push)(path, options.state);
    }, [
        basename,
        navigator,
        routePathnamesJson,
        locationPathname
    ]);
    return navigate;
}
const OutletContext = /*#__PURE__*/ _react.createContext(null);
/**
 * Returns the context (if provided) for the child route at this level of the route
 * hierarchy.
 * @see https://reactrouter.com/docs/en/v6/api#useoutletcontext
 */ function useOutletContext() {
    return _react.useContext(OutletContext);
}
/**
 * Returns the element for the child route at this level of the route
 * hierarchy. Used internally by <Outlet> to render child routes.
 *
 * @see https://reactrouter.com/docs/en/v6/api#useoutlet
 */ function useOutlet(context) {
    let outlet = _react.useContext(RouteContext).outlet;
    if (outlet) return /*#__PURE__*/ _react.createElement(OutletContext.Provider, {
        value: context
    }, outlet);
    return outlet;
}
/**
 * Returns an object of key/value pairs of the dynamic params from the current
 * URL that were matched by the route path.
 *
 * @see https://reactrouter.com/docs/en/v6/api#useparams
 */ function useParams() {
    let { matches  } = _react.useContext(RouteContext);
    let routeMatch = matches[matches.length - 1];
    return routeMatch ? routeMatch.params : {};
}
/**
 * Resolves the pathname of the given `to` value against the current location.
 *
 * @see https://reactrouter.com/docs/en/v6/api#useresolvedpath
 */ function useResolvedPath(to) {
    let { matches  } = _react.useContext(RouteContext);
    let { pathname: locationPathname  } = useLocation();
    let routePathnamesJson = JSON.stringify(matches.map((match)=>match.pathnameBase
    ));
    return _react.useMemo(()=>resolveTo(to, JSON.parse(routePathnamesJson), locationPathname)
    , [
        to,
        routePathnamesJson,
        locationPathname
    ]);
}
/**
 * Returns the element of the route that matched the current location, prepared
 * with the correct context to render the remainder of the route tree. Route
 * elements in the tree must render an <Outlet> to render their child route's
 * element.
 *
 * @see https://reactrouter.com/docs/en/v6/api#useroutes
 */ function useRoutes(routes, locationArg) {
    !useInRouterContext() && invariant(false, // router loaded. We can help them understand how to avoid that.
    "useRoutes() may be used only in the context of a <Router> component.");
    let { matches: parentMatches  } = _react.useContext(RouteContext);
    let routeMatch = parentMatches[parentMatches.length - 1];
    let parentParams = routeMatch ? routeMatch.params : {};
    let parentPathname = routeMatch ? routeMatch.pathname : "/";
    let parentPathnameBase = routeMatch ? routeMatch.pathnameBase : "/";
    let parentRoute = routeMatch && routeMatch.route;
    {
        // You won't get a warning about 2 different <Routes> under a <Route>
        // without a trailing *, but this is a best-effort warning anyway since we
        // cannot even give the warning unless they land at the parent route.
        //
        // Example:
        //
        // <Routes>
        //   {/* This route path MUST end with /* because otherwise
        //       it will never match /blog/post/123 */}
        //   <Route path="blog" element={<Blog />} />
        //   <Route path="blog/feed" element={<BlogFeed />} />
        // </Routes>
        //
        // function Blog() {
        //   return (
        //     <Routes>
        //       <Route path="post/:id" element={<Post />} />
        //     </Routes>
        //   );
        // }
        let parentPath = parentRoute && parentRoute.path || "";
        warningOnce(parentPathname, !parentRoute || parentPath.endsWith("*"), "You rendered descendant <Routes> (or called `useRoutes()`) at " + ("\"" + parentPathname + "\" (under <Route path=\"" + parentPath + "\">) but the ") + "parent route path has no trailing \"*\". This means if you navigate " + "deeper, the parent won't match anymore and therefore the child " + "routes will never render.\n\n" + ("Please change the parent <Route path=\"" + parentPath + "\"> to <Route ") + ("path=\"" + (parentPath === "/" ? "*" : parentPath + "/*") + "\">."));
    }
    let locationFromContext = useLocation();
    let location;
    if (locationArg) {
        var _parsedLocationArg$pa;
        let parsedLocationArg = typeof locationArg === "string" ? _history.parsePath(locationArg) : locationArg;
        !(parentPathnameBase === "/" || ((_parsedLocationArg$pa = parsedLocationArg.pathname) == null ? void 0 : _parsedLocationArg$pa.startsWith(parentPathnameBase))) && invariant(false, "When overriding the location using `<Routes location>` or `useRoutes(routes, location)`, the location pathname must begin with the portion of the URL pathname that was " + ("matched by all parent routes. The current pathname base is \"" + parentPathnameBase + "\" ") + ("but pathname \"" + parsedLocationArg.pathname + "\" was given in the `location` prop."));
        location = parsedLocationArg;
    } else location = locationFromContext;
    let pathname = location.pathname || "/";
    let remainingPathname = parentPathnameBase === "/" ? pathname : pathname.slice(parentPathnameBase.length) || "/";
    let matches = matchRoutes(routes, {
        pathname: remainingPathname
    });
    warning(parentRoute || matches != null, "No routes matched location \"" + location.pathname + location.search + location.hash + "\" ");
    warning(matches == null || matches[matches.length - 1].route.element !== undefined, "Matched leaf route at location \"" + location.pathname + location.search + location.hash + "\" does not have an element. " + "This means it will render an <Outlet /> with a null value by default resulting in an \"empty\" page.");
    return _renderMatches(matches && matches.map((match)=>Object.assign({}, match, {
            params: Object.assign({}, parentParams, match.params),
            pathname: joinPaths([
                parentPathnameBase,
                match.pathname
            ]),
            pathnameBase: match.pathnameBase === "/" ? parentPathnameBase : joinPaths([
                parentPathnameBase,
                match.pathnameBase
            ])
        })
    ), parentMatches);
}
function _renderMatches(matches, parentMatches) {
    if (parentMatches === void 0) parentMatches = [];
    if (matches == null) return null;
    return matches.reduceRight((outlet, match, index)=>{
        return /*#__PURE__*/ _react.createElement(RouteContext.Provider, {
            children: match.route.element !== undefined ? match.route.element : outlet,
            value: {
                outlet,
                matches: parentMatches.concat(matches.slice(0, index + 1))
            }
        });
    }, null);
}
/**
 * A <Router> that stores all entries in memory.
 *
 * @see https://reactrouter.com/docs/en/v6/api#memoryrouter
 */ function MemoryRouter(_ref) {
    let { basename , children , initialEntries , initialIndex  } = _ref;
    let historyRef = _react.useRef();
    if (historyRef.current == null) historyRef.current = _history.createMemoryHistory({
        initialEntries,
        initialIndex
    });
    let history = historyRef.current;
    let [state, setState] = _react.useState({
        action: history.action,
        location: history.location
    });
    _react.useLayoutEffect(()=>history.listen(setState)
    , [
        history
    ]);
    return /*#__PURE__*/ _react.createElement(Router, {
        basename: basename,
        children: children,
        location: state.location,
        navigationType: state.action,
        navigator: history
    });
}
/**
 * Changes the current location.
 *
 * Note: This API is mostly useful in React.Component subclasses that are not
 * able to use hooks. In functional components, we recommend you use the
 * `useNavigate` hook instead.
 *
 * @see https://reactrouter.com/docs/en/v6/api#navigate
 */ function Navigate(_ref2) {
    let { to , replace , state  } = _ref2;
    !useInRouterContext() && invariant(false, // the router loaded. We can help them understand how to avoid that.
    "<Navigate> may be used only in the context of a <Router> component.");
    warning(!_react.useContext(NavigationContext).static, "<Navigate> must not be used on the initial render in a <StaticRouter>. This is a no-op, but you should modify your code so the <Navigate> is only ever rendered in response to some user interaction or state change.");
    let navigate = useNavigate();
    _react.useEffect(()=>{
        navigate(to, {
            replace,
            state
        });
    });
    return null;
}
/**
 * Renders the child route's element, if there is one.
 *
 * @see https://reactrouter.com/docs/en/v6/api#outlet
 */ function Outlet(props) {
    return useOutlet(props.context);
}
/**
 * Declares an element that should be rendered at a certain URL path.
 *
 * @see https://reactrouter.com/docs/en/v6/api#route
 */ function Route(_props) {
    invariant(false, "A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.");
}
/**
 * Provides location context for the rest of the app.
 *
 * Note: You usually won't render a <Router> directly. Instead, you'll render a
 * router that is more specific to your environment such as a <BrowserRouter>
 * in web browsers or a <StaticRouter> for server rendering.
 *
 * @see https://reactrouter.com/docs/en/v6/api#router
 */ function Router(_ref3) {
    let { basename: basenameProp = "/" , children =null , location: locationProp , navigationType =_history.Action.Pop , navigator , static: staticProp = false  } = _ref3;
    !!useInRouterContext() && invariant(false, "You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");
    let basename = normalizePathname(basenameProp);
    let navigationContext = _react.useMemo(()=>({
            basename,
            navigator,
            static: staticProp
        })
    , [
        basename,
        navigator,
        staticProp
    ]);
    if (typeof locationProp === "string") locationProp = _history.parsePath(locationProp);
    let { pathname ="/" , search ="" , hash ="" , state =null , key ="default"  } = locationProp;
    let location = _react.useMemo(()=>{
        let trailingPathname = stripBasename(pathname, basename);
        if (trailingPathname == null) return null;
        return {
            pathname: trailingPathname,
            search,
            hash,
            state,
            key
        };
    }, [
        basename,
        pathname,
        search,
        hash,
        state,
        key
    ]);
    warning(location != null, "<Router basename=\"" + basename + "\"> is not able to match the URL " + ("\"" + pathname + search + hash + "\" because it does not start with the ") + "basename, so the <Router> won't render anything.");
    if (location == null) return null;
    return /*#__PURE__*/ _react.createElement(NavigationContext.Provider, {
        value: navigationContext
    }, /*#__PURE__*/ _react.createElement(LocationContext.Provider, {
        children: children,
        value: {
            location,
            navigationType
        }
    }));
}
/**
 * A container for a nested tree of <Route> elements that renders the branch
 * that best matches the current location.
 *
 * @see https://reactrouter.com/docs/en/v6/api#routes
 */ function Routes(_ref4) {
    let { children , location  } = _ref4;
    return useRoutes(createRoutesFromChildren(children), location);
} ///////////////////////////////////////////////////////////////////////////////
// UTILS
///////////////////////////////////////////////////////////////////////////////
/**
 * Creates a route config from a React "children" object, which is usually
 * either a `<Route>` element or an array of them. Used internally by
 * `<Routes>` to create a route config from its children.
 *
 * @see https://reactrouter.com/docs/en/v6/api#createroutesfromchildren
 */ function createRoutesFromChildren(children) {
    let routes = [];
    _react.Children.forEach(children, (element)=>{
        if (!/*#__PURE__*/ _react.isValidElement(element)) // Ignore non-elements. This allows people to more easily inline
        // conditionals in their route config.
        return;
        if (element.type === _react.Fragment) {
            // Transparently support React.Fragment and its children.
            routes.push.apply(routes, createRoutesFromChildren(element.props.children));
            return;
        }
        !(element.type === Route) && invariant(false, "[" + (typeof element.type === "string" ? element.type : element.type.name) + "] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>");
        let route = {
            caseSensitive: element.props.caseSensitive,
            element: element.props.element,
            index: element.props.index,
            path: element.props.path
        };
        if (element.props.children) route.children = createRoutesFromChildren(element.props.children);
        routes.push(route);
    });
    return routes;
}
/**
 * Renders the result of `matchRoutes()` into a React element.
 */ function renderMatches(matches) {
    return _renderMatches(matches);
}

},{"react":"21dqq","history":"iE5Zp","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"axUqr":[function(require,module,exports) {
var $parcel$ReactRefreshHelpers$4aca = require("@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js");
var prevRefreshReg = window.$RefreshReg$;
var prevRefreshSig = window.$RefreshSig$;
$parcel$ReactRefreshHelpers$4aca.prelude(module);

try {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _jsxDevRuntime = require("react/jsx-dev-runtime");
var _react = require("react");
var _reactRouterDom = require("react-router-dom");
var _propTypes = require("prop-types");
var _propTypesDefault = parcelHelpers.interopDefault(_propTypes);
var _login = require("./components/Login");
var _loginDefault = parcelHelpers.interopDefault(_login);
var _logout = require("./components/Logout");
var _logoutDefault = parcelHelpers.interopDefault(_logout);
var _loginHooks = require("./components/LoginHooks");
var _loginHooksDefault = parcelHelpers.interopDefault(_loginHooks);
var _logoutHooks = require("./components/LogoutHooks");
var _logoutHooksDefault = parcelHelpers.interopDefault(_logoutHooks);
var _s = $RefreshSig$();
// Comment component receives three functions as props,
// these will be used to modify the comments state variable
function Comment({ movieID , rating , comment , onChangeRating , onChangeComment , onClickDelete ,  }) {
    return /*#__PURE__*/ _jsxDevRuntime.jsxDEV("div", {
        children: [
            /*#__PURE__*/ _jsxDevRuntime.jsxDEV("span", {
                className: "id-label",
                children: [
                    "Movie ID:",
                    ` ${movieID}`
                ]
            }, void 0, true, {
                fileName: "static/react/App.js",
                lineNumber: 18,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ _jsxDevRuntime.jsxDEV("input", {
                type: "number",
                value: rating,
                className: "number-input",
                onChange: onChangeRating
            }, void 0, false, {
                fileName: "static/react/App.js",
                lineNumber: 22,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ _jsxDevRuntime.jsxDEV("input", {
                type: "text",
                value: comment,
                onChange: onChangeComment
            }, void 0, false, {
                fileName: "static/react/App.js",
                lineNumber: 23,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ _jsxDevRuntime.jsxDEV("button", {
                type: "button",
                onClick: onClickDelete,
                children: "Delete"
            }, void 0, false, {
                fileName: "static/react/App.js",
                lineNumber: 24,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "static/react/App.js",
        lineNumber: 17,
        columnNumber: 5
    }, this);
}
_c = Comment;
Comment.propTypes = {
    movieID: _propTypesDefault.default.string.isRequired,
    rating: _propTypesDefault.default.number.isRequired,
    comment: _propTypesDefault.default.string.isRequired,
    onClickDelete: _propTypesDefault.default.func.isRequired,
    onChangeComment: _propTypesDefault.default.func.isRequired,
    onChangeRating: _propTypesDefault.default.func.isRequired
};
function App() {
    _s();
    // stores an array of comment objects
    const [comments, setComments] = _react.useState([]);
    // stores username fetched from the server
    const [userName, setUsername] = _react.useState('');
    function handleDelete(index) {
        const newComments = comments.slice();
        newComments.splice(index, 1);
        setComments(newComments);
    }
    // edit the text of a comment
    function handleCommentInput(e, index) {
        const newComments = comments.slice();
        newComments[index].comment = e.target.value;
        setComments(newComments);
    }
    // edit the rating of a review
    // Restricts the value of the rating to be from 0-10
    // Any NaN value (caused by backspacing the input) defaults to 0
    function handleRatingInput(e, index) {
        const newComments = comments.slice();
        const rating = parseInt(e.target.value, 10);
        if (Number.isNaN(rating) || rating < 0) newComments[index].rating = 0;
        else if (rating > 10) newComments[index].rating = 10;
        else newComments[index].rating = rating;
        setComments(newComments);
    }
    // Upon clicking the submit button, Send a post request to the server with the
    // updated comment JSON, and alert the server's returned response
    function saveChanges() {
        const requestOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(comments)
        };
        fetch('/update', requestOptions).then((response)=>response.json()
        ).then((data)=>{
            alert(data);
        }).catch((error)=>{
            console.error('Error:', error);
        }); // eslint-disable-line no-console
    }
    // On initial load of the page, load the state variables with comment data and the username
    // of the currently logged in user
    _react.useEffect(()=>{
        fetch('/comments').then((response)=>response.json()
        ).then((data)=>{
            setComments(data);
        }).catch((error)=>{
            console.error('Error:', error);
        }); // eslint-disable-line no-console
        fetch('/username').then((response)=>response.json()
        ).then((data)=>{
            setUsername(data);
        }).catch((error)=>{
            console.error('Error:', error);
        }); // eslint-disable-line no-console
    }, []);
    return /*#__PURE__*/ _jsxDevRuntime.jsxDEV("div", {
        children: [
            /*#__PURE__*/ _jsxDevRuntime.jsxDEV(_reactRouterDom.Link, {
                to: "/testpage",
                children: "Go to testpage"
            }, void 0, false, {
                fileName: "static/react/App.js",
                lineNumber: 103,
                columnNumber: 7
            }, this),
            " ",
            /*#__PURE__*/ _jsxDevRuntime.jsxDEV("br", {}, void 0, false, {
                fileName: "static/react/App.js",
                lineNumber: 103,
                columnNumber: 50
            }, this),
            /*#__PURE__*/ _jsxDevRuntime.jsxDEV(_reactRouterDom.Link, {
                to: "/testpage1",
                children: "Go to testpage1"
            }, void 0, false, {
                fileName: "static/react/App.js",
                lineNumber: 104,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ _jsxDevRuntime.jsxDEV("ul", {
                children: [
                    /*#__PURE__*/ _jsxDevRuntime.jsxDEV("li", {
                        className: "username",
                        children: [
                            /*#__PURE__*/ _jsxDevRuntime.jsxDEV("span", {
                                children: "Logged in as: "
                            }, void 0, false, {
                                fileName: "static/react/App.js",
                                lineNumber: 107,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ _jsxDevRuntime.jsxDEV("b", {
                                children: userName
                            }, void 0, false, {
                                fileName: "static/react/App.js",
                                lineNumber: 108,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "static/react/App.js",
                        lineNumber: 106,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ _jsxDevRuntime.jsxDEV("li", {
                        className: "movie-link",
                        children: /*#__PURE__*/ _jsxDevRuntime.jsxDEV("a", {
                            href: "/movie",
                            children: "Go to movies page"
                        }, void 0, false, {
                            fileName: "static/react/App.js",
                            lineNumber: 111,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "static/react/App.js",
                        lineNumber: 110,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "static/react/App.js",
                lineNumber: 105,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ _jsxDevRuntime.jsxDEV("div", {
                className: "main",
                children: [
                    /*#__PURE__*/ _jsxDevRuntime.jsxDEV("h1", {
                        children: "Your Reviews:"
                    }, void 0, false, {
                        fileName: "static/react/App.js",
                        lineNumber: 115,
                        columnNumber: 9
                    }, this),
                    comments.map((comment, index)=>/*#__PURE__*/ _jsxDevRuntime.jsxDEV(Comment, {
                            movieID: comment.movie_id.toString(),
                            rating: comment.rating,
                            comment: comment.comment,
                            onClickDelete: ()=>handleDelete(index)
                            ,
                            onChangeComment: (e)=>handleCommentInput(e, index)
                            ,
                            onChangeRating: (e)=>handleRatingInput(e, index)
                        }, comment.movie_id.toString(), false, {
                            fileName: "static/react/App.js",
                            lineNumber: 118,
                            columnNumber: 13
                        }, this)
                    ),
                    /*#__PURE__*/ _jsxDevRuntime.jsxDEV("br", {}, void 0, false, {
                        fileName: "static/react/App.js",
                        lineNumber: 129,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ _jsxDevRuntime.jsxDEV("button", {
                        type: "submit",
                        onClick: saveChanges,
                        children: "Save Changes"
                    }, void 0, false, {
                        fileName: "static/react/App.js",
                        lineNumber: 130,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "static/react/App.js",
                lineNumber: 114,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ _jsxDevRuntime.jsxDEV(_reactRouterDom.Outlet, {}, void 0, false, {
                fileName: "static/react/App.js",
                lineNumber: 132,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "static/react/App.js",
        lineNumber: 102,
        columnNumber: 5
    }, this);
}
_s(App, "2ZVeZZlWXLDm2BDx6ENx58maXY8=");
_c1 = App;
exports.default = App;
var _c, _c1;
$RefreshReg$(_c, "Comment");
$RefreshReg$(_c1, "App");

  $parcel$ReactRefreshHelpers$4aca.postlude(module);
} finally {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
}
},{"react/jsx-dev-runtime":"iTorj","react":"21dqq","react-router-dom":"fdOAw","prop-types":"7wKI2","./components/Login":"62ss6","./components/Logout":"blhL0","./components/LoginHooks":"78iHw","./components/LogoutHooks":"dKh8n","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js":"km3Ru"}],"7wKI2":[function(require,module,exports) {
var ReactIs = require('react-is');
// By explicitly using `prop-types` you are opting into new development behavior.
// http://fb.me/prop-types-in-prod
var throwOnDirectAccess = true;
module.exports = require('./factoryWithTypeCheckers')(ReactIs.isElement, throwOnDirectAccess);

},{"react-is":"7EuwB","./factoryWithTypeCheckers":"bBUgD"}],"7EuwB":[function(require,module,exports) {
'use strict';
module.exports = require('./cjs/react-is.development.js');

},{"./cjs/react-is.development.js":"5DsXl"}],"5DsXl":[function(require,module,exports) {
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 'use strict';
(function() {
    // The Symbol used to tag the ReactElement-like types. If there is no native Symbol
    // nor polyfill, then a plain number is used for performance.
    var hasSymbol = typeof Symbol === 'function' && Symbol.for;
    var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 60103;
    var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 60106;
    var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 60107;
    var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 60108;
    var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 60114;
    var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 60109;
    var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 60110; // TODO: We don't use AsyncMode or ConcurrentMode anymore. They were temporary
    // (unstable) APIs that have been removed. Can we remove the symbols?
    var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 60111;
    var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 60111;
    var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 60112;
    var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 60113;
    var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for('react.suspense_list') : 60120;
    var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 60115;
    var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 60116;
    var REACT_BLOCK_TYPE = hasSymbol ? Symbol.for('react.block') : 60121;
    var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for('react.fundamental') : 60117;
    var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for('react.responder') : 60118;
    var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for('react.scope') : 60119;
    function isValidElementType(type) {
        return typeof type === 'string' || typeof type === 'function' || type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
    }
    function typeOf(object) {
        if (typeof object === 'object' && object !== null) {
            var $$typeof = object.$$typeof;
            switch($$typeof){
                case REACT_ELEMENT_TYPE:
                    var type = object.type;
                    switch(type){
                        case REACT_ASYNC_MODE_TYPE:
                        case REACT_CONCURRENT_MODE_TYPE:
                        case REACT_FRAGMENT_TYPE:
                        case REACT_PROFILER_TYPE:
                        case REACT_STRICT_MODE_TYPE:
                        case REACT_SUSPENSE_TYPE:
                            return type;
                        default:
                            var $$typeofType = type && type.$$typeof;
                            switch($$typeofType){
                                case REACT_CONTEXT_TYPE:
                                case REACT_FORWARD_REF_TYPE:
                                case REACT_LAZY_TYPE:
                                case REACT_MEMO_TYPE:
                                case REACT_PROVIDER_TYPE:
                                    return $$typeofType;
                                default:
                                    return $$typeof;
                            }
                    }
                case REACT_PORTAL_TYPE:
                    return $$typeof;
            }
        }
        return undefined;
    } // AsyncMode is deprecated along with isAsyncMode
    var AsyncMode = REACT_ASYNC_MODE_TYPE;
    var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
    var ContextConsumer = REACT_CONTEXT_TYPE;
    var ContextProvider = REACT_PROVIDER_TYPE;
    var Element = REACT_ELEMENT_TYPE;
    var ForwardRef = REACT_FORWARD_REF_TYPE;
    var Fragment = REACT_FRAGMENT_TYPE;
    var Lazy = REACT_LAZY_TYPE;
    var Memo = REACT_MEMO_TYPE;
    var Portal = REACT_PORTAL_TYPE;
    var Profiler = REACT_PROFILER_TYPE;
    var StrictMode = REACT_STRICT_MODE_TYPE;
    var Suspense = REACT_SUSPENSE_TYPE;
    var hasWarnedAboutDeprecatedIsAsyncMode = false; // AsyncMode should be deprecated
    function isAsyncMode(object) {
        if (!hasWarnedAboutDeprecatedIsAsyncMode) {
            hasWarnedAboutDeprecatedIsAsyncMode = true; // Using console['warn'] to evade Babel and ESLint
            console['warn']("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.");
        }
        return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
    }
    function isConcurrentMode(object) {
        return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
    }
    function isContextConsumer(object) {
        return typeOf(object) === REACT_CONTEXT_TYPE;
    }
    function isContextProvider(object) {
        return typeOf(object) === REACT_PROVIDER_TYPE;
    }
    function isElement(object) {
        return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
    }
    function isForwardRef(object) {
        return typeOf(object) === REACT_FORWARD_REF_TYPE;
    }
    function isFragment(object) {
        return typeOf(object) === REACT_FRAGMENT_TYPE;
    }
    function isLazy(object) {
        return typeOf(object) === REACT_LAZY_TYPE;
    }
    function isMemo(object) {
        return typeOf(object) === REACT_MEMO_TYPE;
    }
    function isPortal(object) {
        return typeOf(object) === REACT_PORTAL_TYPE;
    }
    function isProfiler(object) {
        return typeOf(object) === REACT_PROFILER_TYPE;
    }
    function isStrictMode(object) {
        return typeOf(object) === REACT_STRICT_MODE_TYPE;
    }
    function isSuspense(object) {
        return typeOf(object) === REACT_SUSPENSE_TYPE;
    }
    exports.AsyncMode = AsyncMode;
    exports.ConcurrentMode = ConcurrentMode;
    exports.ContextConsumer = ContextConsumer;
    exports.ContextProvider = ContextProvider;
    exports.Element = Element;
    exports.ForwardRef = ForwardRef;
    exports.Fragment = Fragment;
    exports.Lazy = Lazy;
    exports.Memo = Memo;
    exports.Portal = Portal;
    exports.Profiler = Profiler;
    exports.StrictMode = StrictMode;
    exports.Suspense = Suspense;
    exports.isAsyncMode = isAsyncMode;
    exports.isConcurrentMode = isConcurrentMode;
    exports.isContextConsumer = isContextConsumer;
    exports.isContextProvider = isContextProvider;
    exports.isElement = isElement;
    exports.isForwardRef = isForwardRef;
    exports.isFragment = isFragment;
    exports.isLazy = isLazy;
    exports.isMemo = isMemo;
    exports.isPortal = isPortal;
    exports.isProfiler = isProfiler;
    exports.isStrictMode = isStrictMode;
    exports.isSuspense = isSuspense;
    exports.isValidElementType = isValidElementType;
    exports.typeOf = typeOf;
})();

},{}],"bBUgD":[function(require,module,exports) {
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 'use strict';
var ReactIs = require('react-is');
var assign = require('object-assign');
var ReactPropTypesSecret = require('./lib/ReactPropTypesSecret');
var has = require('./lib/has');
var checkPropTypes = require('./checkPropTypes');
var printWarning = function() {};
printWarning = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') console.error(message);
    try {
        // --- Welcome to debugging React ---
        // This error was thrown as a convenience so that you can use this stack
        // to find the callsite that caused this warning to fire.
        throw new Error(message);
    } catch (x) {}
};
function emptyFunctionThatReturnsNull() {
    return null;
}
module.exports = function(isValidElement, throwOnDirectAccess) {
    /* global Symbol */ var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
    var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.
    /**
   * Returns the iterator method function contained on the iterable object.
   *
   * Be sure to invoke the function with the iterable as context:
   *
   *     var iteratorFn = getIteratorFn(myIterable);
   *     if (iteratorFn) {
   *       var iterator = iteratorFn.call(myIterable);
   *       ...
   *     }
   *
   * @param {?object} maybeIterable
   * @return {?function}
   */ function getIteratorFn(maybeIterable) {
        var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
        if (typeof iteratorFn === 'function') return iteratorFn;
    }
    /**
   * Collection of methods that allow declaration and validation of props that are
   * supplied to React components. Example usage:
   *
   *   var Props = require('ReactPropTypes');
   *   var MyArticle = React.createClass({
   *     propTypes: {
   *       // An optional string prop named "description".
   *       description: Props.string,
   *
   *       // A required enum prop named "category".
   *       category: Props.oneOf(['News','Photos']).isRequired,
   *
   *       // A prop named "dialog" that requires an instance of Dialog.
   *       dialog: Props.instanceOf(Dialog).isRequired
   *     },
   *     render: function() { ... }
   *   });
   *
   * A more formal specification of how these methods are used:
   *
   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
   *   decl := ReactPropTypes.{type}(.isRequired)?
   *
   * Each and every declaration produces a function with the same signature. This
   * allows the creation of custom validation functions. For example:
   *
   *  var MyLink = React.createClass({
   *    propTypes: {
   *      // An optional string or URI prop named "href".
   *      href: function(props, propName, componentName) {
   *        var propValue = props[propName];
   *        if (propValue != null && typeof propValue !== 'string' &&
   *            !(propValue instanceof URI)) {
   *          return new Error(
   *            'Expected a string or an URI for ' + propName + ' in ' +
   *            componentName
   *          );
   *        }
   *      }
   *    },
   *    render: function() {...}
   *  });
   *
   * @internal
   */ var ANONYMOUS = '<<anonymous>>';
    // Important!
    // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
    var ReactPropTypes = {
        array: createPrimitiveTypeChecker('array'),
        bigint: createPrimitiveTypeChecker('bigint'),
        bool: createPrimitiveTypeChecker('boolean'),
        func: createPrimitiveTypeChecker('function'),
        number: createPrimitiveTypeChecker('number'),
        object: createPrimitiveTypeChecker('object'),
        string: createPrimitiveTypeChecker('string'),
        symbol: createPrimitiveTypeChecker('symbol'),
        any: createAnyTypeChecker(),
        arrayOf: createArrayOfTypeChecker,
        element: createElementTypeChecker(),
        elementType: createElementTypeTypeChecker(),
        instanceOf: createInstanceTypeChecker,
        node: createNodeChecker(),
        objectOf: createObjectOfTypeChecker,
        oneOf: createEnumTypeChecker,
        oneOfType: createUnionTypeChecker,
        shape: createShapeTypeChecker,
        exact: createStrictShapeTypeChecker
    };
    /**
   * inlined Object.is polyfill to avoid requiring consumers ship their own
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
   */ /*eslint-disable no-self-compare*/ function is(x, y) {
        // SameValue algorithm
        if (x === y) // Steps 1-5, 7-10
        // Steps 6.b-6.e: +0 != -0
        return x !== 0 || 1 / x === 1 / y;
        else // Step 6.a: NaN == NaN
        return x !== x && y !== y;
    }
    /*eslint-enable no-self-compare*/ /**
   * We use an Error-like object for backward compatibility as people may call
   * PropTypes directly and inspect their output. However, we don't use real
   * Errors anymore. We don't inspect their stack anyway, and creating them
   * is prohibitively expensive if they are created too often, such as what
   * happens in oneOfType() for any type before the one that matched.
   */ function PropTypeError(message, data) {
        this.message = message;
        this.data = data && typeof data === 'object' ? data : {};
        this.stack = '';
    }
    // Make `instanceof Error` still work for returned errors.
    PropTypeError.prototype = Error.prototype;
    function createChainableTypeChecker(validate) {
        var manualPropTypeCallCache = {};
        var manualPropTypeWarningCount = 0;
        function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
            componentName = componentName || ANONYMOUS;
            propFullName = propFullName || propName;
            if (secret !== ReactPropTypesSecret) {
                if (throwOnDirectAccess) {
                    // New behavior only for users of `prop-types` package
                    var err = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types");
                    err.name = 'Invariant Violation';
                    throw err;
                } else if (typeof console !== 'undefined') {
                    // Old behavior for people using React.PropTypes
                    var cacheKey = componentName + ':' + propName;
                    if (!manualPropTypeCallCache[cacheKey] && // Avoid spamming the console because they are often not actionable except for lib authors
                    manualPropTypeWarningCount < 3) {
                        printWarning("You are manually calling a React.PropTypes validation function for the `" + propFullName + '` prop on `' + componentName + '`. This is deprecated ' + 'and will throw in the standalone `prop-types` package. ' + 'You may be seeing this warning due to a third-party PropTypes ' + 'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.');
                        manualPropTypeCallCache[cacheKey] = true;
                        manualPropTypeWarningCount++;
                    }
                }
            }
            if (props[propName] == null) {
                if (isRequired) {
                    if (props[propName] === null) return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
                    return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
                }
                return null;
            } else return validate(props, propName, componentName, location, propFullName);
        }
        var chainedCheckType = checkType.bind(null, false);
        chainedCheckType.isRequired = checkType.bind(null, true);
        return chainedCheckType;
    }
    function createPrimitiveTypeChecker(expectedType) {
        function validate(props, propName, componentName, location, propFullName, secret) {
            var propValue = props[propName];
            var propType = getPropType(propValue);
            if (propType !== expectedType) {
                // `propValue` being instance of, say, date/regexp, pass the 'object'
                // check, but we can offer a more precise error message here rather than
                // 'of type `object`'.
                var preciseType = getPreciseType(propValue);
                return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'), {
                    expectedType: expectedType
                });
            }
            return null;
        }
        return createChainableTypeChecker(validate);
    }
    function createAnyTypeChecker() {
        return createChainableTypeChecker(emptyFunctionThatReturnsNull);
    }
    function createArrayOfTypeChecker(typeChecker) {
        function validate(props, propName, componentName, location, propFullName) {
            if (typeof typeChecker !== 'function') return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
            var propValue = props[propName];
            if (!Array.isArray(propValue)) {
                var propType = getPropType(propValue);
                return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
            }
            for(var i = 0; i < propValue.length; i++){
                var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret);
                if (error instanceof Error) return error;
            }
            return null;
        }
        return createChainableTypeChecker(validate);
    }
    function createElementTypeChecker() {
        function validate(props, propName, componentName, location, propFullName) {
            var propValue = props[propName];
            if (!isValidElement(propValue)) {
                var propType = getPropType(propValue);
                return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
            }
            return null;
        }
        return createChainableTypeChecker(validate);
    }
    function createElementTypeTypeChecker() {
        function validate(props, propName, componentName, location, propFullName) {
            var propValue = props[propName];
            if (!ReactIs.isValidElementType(propValue)) {
                var propType = getPropType(propValue);
                return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement type.'));
            }
            return null;
        }
        return createChainableTypeChecker(validate);
    }
    function createInstanceTypeChecker(expectedClass) {
        function validate(props, propName, componentName, location, propFullName) {
            if (!(props[propName] instanceof expectedClass)) {
                var expectedClassName = expectedClass.name || ANONYMOUS;
                var actualClassName = getClassName(props[propName]);
                return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
            }
            return null;
        }
        return createChainableTypeChecker(validate);
    }
    function createEnumTypeChecker(expectedValues) {
        if (!Array.isArray(expectedValues)) {
            {
                if (arguments.length > 1) printWarning('Invalid arguments supplied to oneOf, expected an array, got ' + arguments.length + ' arguments. ' + 'A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).');
                else printWarning('Invalid argument supplied to oneOf, expected an array.');
            }
            return emptyFunctionThatReturnsNull;
        }
        function validate(props, propName, componentName, location, propFullName) {
            var propValue = props[propName];
            for(var i = 0; i < expectedValues.length; i++){
                if (is(propValue, expectedValues[i])) return null;
            }
            var valuesString = JSON.stringify(expectedValues, function replacer(key, value) {
                var type = getPreciseType(value);
                if (type === 'symbol') return String(value);
                return value;
            });
            return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + String(propValue) + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
        }
        return createChainableTypeChecker(validate);
    }
    function createObjectOfTypeChecker(typeChecker) {
        function validate(props, propName, componentName, location, propFullName) {
            if (typeof typeChecker !== 'function') return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
            var propValue = props[propName];
            var propType = getPropType(propValue);
            if (propType !== 'object') return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
            for(var key in propValue)if (has(propValue, key)) {
                var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
                if (error instanceof Error) return error;
            }
            return null;
        }
        return createChainableTypeChecker(validate);
    }
    function createUnionTypeChecker(arrayOfTypeCheckers) {
        if (!Array.isArray(arrayOfTypeCheckers)) {
            printWarning('Invalid argument supplied to oneOfType, expected an instance of array.');
            return emptyFunctionThatReturnsNull;
        }
        for(var i1 = 0; i1 < arrayOfTypeCheckers.length; i1++){
            var checker = arrayOfTypeCheckers[i1];
            if (typeof checker !== 'function') {
                printWarning("Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + getPostfixForTypeWarning(checker) + ' at index ' + i1 + '.');
                return emptyFunctionThatReturnsNull;
            }
        }
        function validate(props, propName, componentName, location, propFullName) {
            var expectedTypes = [];
            for(var i = 0; i < arrayOfTypeCheckers.length; i++){
                var checker = arrayOfTypeCheckers[i];
                var checkerResult = checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret);
                if (checkerResult == null) return null;
                if (checkerResult.data && has(checkerResult.data, 'expectedType')) expectedTypes.push(checkerResult.data.expectedType);
            }
            var expectedTypesMessage = expectedTypes.length > 0 ? ', expected one of type [' + expectedTypes.join(', ') + ']' : '';
            return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`' + expectedTypesMessage + '.'));
        }
        return createChainableTypeChecker(validate);
    }
    function createNodeChecker() {
        function validate(props, propName, componentName, location, propFullName) {
            if (!isNode(props[propName])) return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
            return null;
        }
        return createChainableTypeChecker(validate);
    }
    function invalidValidatorError(componentName, location, propFullName, key, type) {
        return new PropTypeError((componentName || 'React class') + ': ' + location + ' type `' + propFullName + '.' + key + '` is invalid; ' + 'it must be a function, usually from the `prop-types` package, but received `' + type + '`.');
    }
    function createShapeTypeChecker(shapeTypes) {
        function validate(props, propName, componentName, location, propFullName) {
            var propValue = props[propName];
            var propType = getPropType(propValue);
            if (propType !== 'object') return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
            for(var key in shapeTypes){
                var checker = shapeTypes[key];
                if (typeof checker !== 'function') return invalidValidatorError(componentName, location, propFullName, key, getPreciseType(checker));
                var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
                if (error) return error;
            }
            return null;
        }
        return createChainableTypeChecker(validate);
    }
    function createStrictShapeTypeChecker(shapeTypes) {
        function validate(props, propName, componentName, location, propFullName) {
            var propValue = props[propName];
            var propType = getPropType(propValue);
            if (propType !== 'object') return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
            // We need to check all keys in case some are required but missing from props.
            var allKeys = assign({}, props[propName], shapeTypes);
            for(var key in allKeys){
                var checker = shapeTypes[key];
                if (has(shapeTypes, key) && typeof checker !== 'function') return invalidValidatorError(componentName, location, propFullName, key, getPreciseType(checker));
                if (!checker) return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' + '\nBad object: ' + JSON.stringify(props[propName], null, '  ') + '\nValid keys: ' + JSON.stringify(Object.keys(shapeTypes), null, '  '));
                var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
                if (error) return error;
            }
            return null;
        }
        return createChainableTypeChecker(validate);
    }
    function isNode(propValue) {
        switch(typeof propValue){
            case 'number':
            case 'string':
            case 'undefined':
                return true;
            case 'boolean':
                return !propValue;
            case 'object':
                if (Array.isArray(propValue)) return propValue.every(isNode);
                if (propValue === null || isValidElement(propValue)) return true;
                var iteratorFn = getIteratorFn(propValue);
                if (iteratorFn) {
                    var iterator = iteratorFn.call(propValue);
                    var step;
                    if (iteratorFn !== propValue.entries) while(!(step = iterator.next()).done){
                        if (!isNode(step.value)) return false;
                    }
                    else // Iterator will provide entry [k,v] tuples rather than values.
                    while(!(step = iterator.next()).done){
                        var entry = step.value;
                        if (entry) {
                            if (!isNode(entry[1])) return false;
                        }
                    }
                } else return false;
                return true;
            default:
                return false;
        }
    }
    function isSymbol(propType, propValue) {
        // Native Symbol.
        if (propType === 'symbol') return true;
        // falsy value can't be a Symbol
        if (!propValue) return false;
        // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
        if (propValue['@@toStringTag'] === 'Symbol') return true;
        // Fallback for non-spec compliant Symbols which are polyfilled.
        if (typeof Symbol === 'function' && propValue instanceof Symbol) return true;
        return false;
    }
    // Equivalent of `typeof` but with special handling for array and regexp.
    function getPropType(propValue) {
        var propType = typeof propValue;
        if (Array.isArray(propValue)) return 'array';
        if (propValue instanceof RegExp) // Old webkits (at least until Android 4.0) return 'function' rather than
        // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
        // passes PropTypes.object.
        return 'object';
        if (isSymbol(propType, propValue)) return 'symbol';
        return propType;
    }
    // This handles more types than `getPropType`. Only used for error messages.
    // See `createPrimitiveTypeChecker`.
    function getPreciseType(propValue) {
        if (typeof propValue === 'undefined' || propValue === null) return '' + propValue;
        var propType = getPropType(propValue);
        if (propType === 'object') {
            if (propValue instanceof Date) return 'date';
            else if (propValue instanceof RegExp) return 'regexp';
        }
        return propType;
    }
    // Returns a string that is postfixed to a warning about an invalid type.
    // For example, "undefined" or "of type array"
    function getPostfixForTypeWarning(value) {
        var type = getPreciseType(value);
        switch(type){
            case 'array':
            case 'object':
                return 'an ' + type;
            case 'boolean':
            case 'date':
            case 'regexp':
                return 'a ' + type;
            default:
                return type;
        }
    }
    // Returns class name of the object, if any.
    function getClassName(propValue) {
        if (!propValue.constructor || !propValue.constructor.name) return ANONYMOUS;
        return propValue.constructor.name;
    }
    ReactPropTypes.checkPropTypes = checkPropTypes;
    ReactPropTypes.resetWarningCache = checkPropTypes.resetWarningCache;
    ReactPropTypes.PropTypes = ReactPropTypes;
    return ReactPropTypes;
};

},{"react-is":"7EuwB","object-assign":"7OXxh","./lib/ReactPropTypesSecret":"jZTZJ","./lib/has":"fqKuf","./checkPropTypes":"5VwyJ"}],"jZTZJ":[function(require,module,exports) {
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 'use strict';
var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';
module.exports = ReactPropTypesSecret;

},{}],"fqKuf":[function(require,module,exports) {
module.exports = Function.call.bind(Object.prototype.hasOwnProperty);

},{}],"5VwyJ":[function(require,module,exports) {
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 'use strict';
var printWarning = function() {};
var ReactPropTypesSecret = require('./lib/ReactPropTypesSecret');
var loggedTypeFailures = {};
var has = require('./lib/has');
printWarning = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') console.error(message);
    try {
        // --- Welcome to debugging React ---
        // This error was thrown as a convenience so that you can use this stack
        // to find the callsite that caused this warning to fire.
        throw new Error(message);
    } catch (x) {}
};
/**
 * Assert that the values match with the type specs.
 * Error messages are memorized and will only be shown once.
 *
 * @param {object} typeSpecs Map of name to a ReactPropType
 * @param {object} values Runtime values that need to be type-checked
 * @param {string} location e.g. "prop", "context", "child context"
 * @param {string} componentName Name of the component for error messages.
 * @param {?Function} getStack Returns the component stack.
 * @private
 */ function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
    for(var typeSpecName in typeSpecs)if (has(typeSpecs, typeSpecName)) {
        var error;
        // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.
        try {
            // This is intentionally an invariant that gets caught. It's the same
            // behavior as without this statement except with a better message.
            if (typeof typeSpecs[typeSpecName] !== 'function') {
                var err = Error((componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' + 'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.' + 'This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.');
                err.name = 'Invariant Violation';
                throw err;
            }
            error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
        } catch (ex) {
            error = ex;
        }
        if (error && !(error instanceof Error)) printWarning((componentName || 'React class') + ': type specification of ' + location + ' `' + typeSpecName + '` is invalid; the type checker ' + 'function must return `null` or an `Error` but returned a ' + typeof error + '. ' + 'You may have forgotten to pass an argument to the type checker ' + 'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' + 'shape all require an argument).');
        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
            // Only monitor this failure once because there tends to be a lot of the
            // same error.
            loggedTypeFailures[error.message] = true;
            var stack = getStack ? getStack() : '';
            printWarning('Failed ' + location + ' type: ' + error.message + (stack != null ? stack : ''));
        }
    }
}
/**
 * Resets warning cache when testing.
 *
 * @private
 */ checkPropTypes.resetWarningCache = function() {
    loggedTypeFailures = {};
};
module.exports = checkPropTypes;

},{"./lib/ReactPropTypesSecret":"jZTZJ","./lib/has":"fqKuf"}],"62ss6":[function(require,module,exports) {
var $parcel$ReactRefreshHelpers$46a9 = require("@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js");
var prevRefreshReg = window.$RefreshReg$;
var prevRefreshSig = window.$RefreshSig$;
$parcel$ReactRefreshHelpers$46a9.prelude(module);

try {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _jsxDevRuntime = require("react/jsx-dev-runtime");
var _react = require("react");
var _reactDefault = parcelHelpers.interopDefault(_react);
var _reactGoogleLogin = require("react-google-login");
// refresh token
var _refreshToken = require("../utils/refreshToken");
const clientId = '638797613324-33d5aohc3l45ot8kdcc4ctem8a7obj94.apps.googleusercontent.com';
function Login() {
    const onSuccess = (res)=>{
        console.log('Login Success: currentUser:', res.profileObj);
        alert(`Logged in successfully welcome ${res.profileObj.name} 😍. \n See console for full profile object.`);
        _refreshToken.refreshTokenSetup(res);
    };
    const onFailure = (res)=>{
        console.log('Login failed: res:', res);
        alert(`Failed to login. 😢 Please ping this to repo owner twitter.com/sivanesh_fiz`);
    };
    return /*#__PURE__*/ _jsxDevRuntime.jsxDEV("div", {
        children: /*#__PURE__*/ _jsxDevRuntime.jsxDEV(_reactGoogleLogin.GoogleLogin, {
            clientId: clientId,
            buttonText: "Login",
            onSuccess: onSuccess,
            onFailure: onFailure,
            cookiePolicy: 'single_host_origin',
            style: {
                marginTop: '100px'
            },
            isSignedIn: true
        }, void 0, false, {
            fileName: "static/react/components/Login.js",
            lineNumber: 28,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "static/react/components/Login.js",
        lineNumber: 27,
        columnNumber: 9
    }, this);
}
_c = Login;
exports.default = Login;
var _c;
$RefreshReg$(_c, "Login");

  $parcel$ReactRefreshHelpers$46a9.postlude(module);
} finally {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
}
},{"react/jsx-dev-runtime":"iTorj","react":"21dqq","react-google-login":"dBsjF","../utils/refreshToken":"Lt25K","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js":"km3Ru"}],"dBsjF":[function(require,module,exports) {
!function(e, t) {
    module.exports = t(require("react"));
}("undefined" != typeof self ? self : this, function(e1) {
    var n1, o1;
    return o1 = {}, t1.m = n1 = [
        function(t) {
            t.exports = e1;
        },
        function(e, t, n) {
            e.exports = n(2)();
        },
        function(e2, t2, n2) {
            "use strict";
            function o() {}
            function r() {}
            var i = n2(3);
            r.resetWarningCache = o, e2.exports = function() {
                function e(e, t, n, o, r, a) {
                    if (a !== i) {
                        var c = Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
                        throw c.name = "Invariant Violation", c;
                    }
                }
                function t() {
                    return e;
                }
                var n = {
                    array: e.isRequired = e,
                    bool: e,
                    func: e,
                    number: e,
                    object: e,
                    string: e,
                    symbol: e,
                    any: e,
                    arrayOf: t,
                    element: e,
                    elementType: e,
                    instanceOf: t,
                    node: e,
                    objectOf: t,
                    oneOf: t,
                    oneOfType: t,
                    shape: t,
                    exact: t,
                    checkPropTypes: r,
                    resetWarningCache: o
                };
                return n.PropTypes = n;
            };
        },
        function(e) {
            "use strict";
            e.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
        },
        function(e3, t3, n3) {
            "use strict";
            function o2(e4, t4) {
                return function(e) {
                    if (Array.isArray(e)) return e;
                }(e4) || function(e, t) {
                    if ("undefined" != typeof Symbol && Symbol.iterator in Object(e)) {
                        var n = [], o = !0, r = !1, i = void 0;
                        try {
                            for(var a, c = e[Symbol.iterator](); !(o = (a = c.next()).done) && (n.push(a.value), !t || n.length !== t); o = !0);
                        } catch (e) {
                            r = !0, i = e;
                        } finally{
                            try {
                                o || null == c.return || c.return();
                            } finally{
                                if (r) throw i;
                            }
                        }
                        return n;
                    }
                }(e4, t4) || function(e, t) {
                    if (e) {
                        if ("string" == typeof e) return r1(e, t);
                        var n = Object.prototype.toString.call(e).slice(8, -1);
                        return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(n) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? r1(e, t) : void 0;
                    }
                }(e4, t4) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                }();
            }
            function r1(e, t) {
                null != t && t <= e.length || (t = e.length);
                for(var n = 0, o = Array(t); n < t; n++)o[n] = e[n];
                return o;
            }
            function i1(e5, t5) {
                return function(e) {
                    if (Array.isArray(e)) return e;
                }(e5) || function(e, t) {
                    if ("undefined" != typeof Symbol && Symbol.iterator in Object(e)) {
                        var n = [], o = !0, r = !1, i = void 0;
                        try {
                            for(var a, c = e[Symbol.iterator](); !(o = (a = c.next()).done) && (n.push(a.value), !t || n.length !== t); o = !0);
                        } catch (e) {
                            r = !0, i = e;
                        } finally{
                            try {
                                o || null == c.return || c.return();
                            } finally{
                                if (r) throw i;
                            }
                        }
                        return n;
                    }
                }(e5, t5) || function(e, t) {
                    if (e) {
                        if ("string" == typeof e) return a1(e, t);
                        var n = Object.prototype.toString.call(e).slice(8, -1);
                        return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(n) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? a1(e, t) : void 0;
                    }
                }(e5, t5) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                }();
            }
            function a1(e, t) {
                null != t && t <= e.length || (t = e.length);
                for(var n = 0, o = Array(t); n < t; n++)o[n] = e[n];
                return o;
            }
            function c1(e6, t6) {
                return function(e) {
                    if (Array.isArray(e)) return e;
                }(e6) || function(e, t) {
                    if ("undefined" != typeof Symbol && Symbol.iterator in Object(e)) {
                        var n = [], o = !0, r = !1, i = void 0;
                        try {
                            for(var a, c = e[Symbol.iterator](); !(o = (a = c.next()).done) && (n.push(a.value), !t || n.length !== t); o = !0);
                        } catch (e) {
                            r = !0, i = e;
                        } finally{
                            try {
                                o || null == c.return || c.return();
                            } finally{
                                if (r) throw i;
                            }
                        }
                        return n;
                    }
                }(e6, t6) || function(e, t) {
                    if (e) {
                        if ("string" == typeof e) return u1(e, t);
                        var n = Object.prototype.toString.call(e).slice(8, -1);
                        return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(n) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? u1(e, t) : void 0;
                    }
                }(e6, t6) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                }();
            }
            function u1(e, t) {
                null != t && t <= e.length || (t = e.length);
                for(var n = 0, o = Array(t); n < t; n++)o[n] = e[n];
                return o;
            }
            function l1(e7, t7) {
                return function(e) {
                    if (Array.isArray(e)) return e;
                }(e7) || function(e, t) {
                    if ("undefined" != typeof Symbol && Symbol.iterator in Object(e)) {
                        var n = [], o = !0, r = !1, i = void 0;
                        try {
                            for(var a, c = e[Symbol.iterator](); !(o = (a = c.next()).done) && (n.push(a.value), !t || n.length !== t); o = !0);
                        } catch (e) {
                            r = !0, i = e;
                        } finally{
                            try {
                                o || null == c.return || c.return();
                            } finally{
                                if (r) throw i;
                            }
                        }
                        return n;
                    }
                }(e7, t7) || function(e, t) {
                    if (e) {
                        if ("string" == typeof e) return s1(e, t);
                        var n = Object.prototype.toString.call(e).slice(8, -1);
                        return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(n) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? s1(e, t) : void 0;
                    }
                }(e7, t7) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                }();
            }
            function s1(e, t) {
                null != t && t <= e.length || (t = e.length);
                for(var n = 0, o = Array(t); n < t; n++)o[n] = e[n];
                return o;
            }
            function f1(e, t, n, o, r, i) {
                var a = e.getElementsByTagName(t)[0], c = a, u = a;
                (u = e.createElement(t)).id = n, u.src = o, c && c.parentNode ? c.parentNode.insertBefore(u, c) : e.head.appendChild(u), u.onerror = i, u.onload = r;
            }
            function d1(e, t) {
                var n = e.getElementById(t);
                n && n.parentNode.removeChild(n);
            }
            function p1(e) {
                return b1.a.createElement("span", {
                    style: {
                        paddingRight: 10,
                        fontWeight: 500,
                        paddingLeft: e.icon ? 0 : 10,
                        paddingTop: 10,
                        paddingBottom: 10
                    }
                }, e.children);
            }
            function g1(e) {
                return b1.a.createElement("div", {
                    style: {
                        marginRight: 10,
                        background: e.active ? "#eee" : "#fff",
                        padding: 10,
                        borderRadius: 2
                    }
                }, b1.a.createElement("svg", {
                    width: "18",
                    height: "18",
                    xmlns: "http://www.w3.org/2000/svg"
                }, b1.a.createElement("g", {
                    fill: "#000",
                    fillRule: "evenodd"
                }, b1.a.createElement("path", {
                    d: "M9 3.48c1.69 0 2.83.73 3.48 1.34l2.54-2.48C13.46.89 11.43 0 9 0 5.48 0 2.44 2.02.96 4.96l2.91 2.26C4.6 5.05 6.62 3.48 9 3.48z",
                    fill: "#EA4335"
                }), b1.a.createElement("path", {
                    d: "M17.64 9.2c0-.74-.06-1.28-.19-1.84H9v3.34h4.96c-.1.83-.64 2.08-1.84 2.92l2.84 2.2c1.7-1.57 2.68-3.88 2.68-6.62z",
                    fill: "#4285F4"
                }), b1.a.createElement("path", {
                    d: "M3.88 10.78A5.54 5.54 0 0 1 3.58 9c0-.62.11-1.22.29-1.78L.96 4.96A9.008 9.008 0 0 0 0 9c0 1.45.35 2.82.96 4.04l2.92-2.26z",
                    fill: "#FBBC05"
                }), b1.a.createElement("path", {
                    d: "M9 18c2.43 0 4.47-.8 5.96-2.18l-2.84-2.2c-.76.53-1.78.9-3.12.9-2.38 0-4.4-1.57-5.12-3.74L.97 13.04C2.45 15.98 5.48 18 9 18z",
                    fill: "#34A853"
                }), b1.a.createElement("path", {
                    fill: "none",
                    d: "M0 0h18v18H0z"
                }))));
            }
            function y1(e) {
                var t = i1(Object(m.useState)(!1), 2), n = t[0], o = t[1], r = i1(Object(m.useState)(!1), 2), a = r[0], c = r[1], u = e.tag, l = e.type, s = e.className, f = e.disabledStyle, d = e.buttonText, y = e.children, v = e.render, S = e.theme, j = e.icon, O = e.disabled, x = h1({
                    onSuccess: e.onSuccess,
                    onAutoLoadFinished: e.onAutoLoadFinished,
                    onRequest: e.onRequest,
                    onFailure: e.onFailure,
                    onScriptLoadFailure: e.onScriptLoadFailure,
                    clientId: e.clientId,
                    cookiePolicy: e.cookiePolicy,
                    loginHint: e.loginHint,
                    hostedDomain: e.hostedDomain,
                    autoLoad: e.autoLoad,
                    isSignedIn: e.isSignedIn,
                    fetchBasicProfile: e.fetchBasicProfile,
                    redirectUri: e.redirectUri,
                    discoveryDocs: e.discoveryDocs,
                    uxMode: e.uxMode,
                    scope: e.scope,
                    accessType: e.accessType,
                    responseType: e.responseType,
                    jsSrc: e.jsSrc,
                    prompt: e.prompt
                }), I = x.signIn, w = O || !x.loaded;
                if (v) return v({
                    onClick: I,
                    disabled: w
                });
                var k = {
                    backgroundColor: "dark" === S ? "rgb(66, 133, 244)" : "#fff",
                    display: "inline-flex",
                    alignItems: "center",
                    color: "dark" === S ? "#fff" : "rgba(0, 0, 0, .54)",
                    boxShadow: "0 2px 2px 0 rgba(0, 0, 0, .24), 0 0 1px 0 rgba(0, 0, 0, .24)",
                    padding: 0,
                    borderRadius: 2,
                    border: "1px solid transparent",
                    fontSize: 14,
                    fontWeight: "500",
                    fontFamily: "Roboto, sans-serif"
                }, A = {
                    cursor: "pointer",
                    backgroundColor: "dark" === S ? "#3367D6" : "#eee",
                    color: "dark" === S ? "#fff" : "rgba(0, 0, 0, .54)",
                    opacity: 1
                }, _ = w ? Object.assign({}, k, f) : a ? Object.assign({}, k, A) : n ? Object.assign({}, k, {
                    cursor: "pointer",
                    opacity: 0.9
                }) : k;
                return b1.a.createElement(u, {
                    onMouseEnter: function() {
                        return o(!0);
                    },
                    onMouseLeave: function() {
                        o(!1), c(!1);
                    },
                    onMouseDown: function() {
                        return c(!0);
                    },
                    onMouseUp: function() {
                        return c(!1);
                    },
                    onClick: I,
                    style: _,
                    type: l,
                    disabled: w,
                    className: s
                }, [
                    j && b1.a.createElement(g1, {
                        key: 1,
                        active: a
                    }),
                    b1.a.createElement(p1, {
                        icon: j,
                        key: 2
                    }, y || d)
                ]);
            }
            n3.r(t3), n3.d(t3, "default", function() {
                return S1;
            }), n3.d(t3, "GoogleLogin", function() {
                return S1;
            }), n3.d(t3, "GoogleLogout", function() {
                return O1;
            }), n3.d(t3, "useGoogleLogin", function() {
                return h1;
            }), n3.d(t3, "useGoogleLogout", function() {
                return j1;
            });
            var m = n3(0), b1 = n3.n(m), h1 = (n3(1), function(e8) {
                function t8(e) {
                    var t = e.getBasicProfile(), n = e.getAuthResponse(!0);
                    e.googleId = t.getId(), e.tokenObj = n, e.tokenId = n.id_token, e.accessToken = n.access_token, e.profileObj = {
                        googleId: t.getId(),
                        imageUrl: t.getImageUrl(),
                        email: t.getEmail(),
                        name: t.getName(),
                        givenName: t.getGivenName(),
                        familyName: t.getFamilyName()
                    }, i(e);
                }
                function n4(e9) {
                    if (e9 && e9.preventDefault(), P) {
                        var n = window.gapi.auth2.getAuthInstance(), o = {
                            prompt: L
                        };
                        p(), "code" === _ ? n.grantOfflineAccess(o).then(function(e) {
                            return i(e);
                        }, function(e) {
                            return l(e);
                        }) : n.signIn(o).then(function(e) {
                            return t8(e);
                        }, function(e) {
                            return l(e);
                        });
                    }
                }
                var r2 = e8.onSuccess, i = void 0 === r2 ? function() {} : r2, a = e8.onAutoLoadFinished, c = void 0 === a ? function() {} : a, u = e8.onFailure, l = void 0 === u ? function() {} : u, s = e8.onRequest, p = void 0 === s ? function() {} : s, g = e8.onScriptLoadFailure, y = e8.clientId, b = e8.cookiePolicy, h = e8.loginHint, v = e8.hostedDomain, S = e8.autoLoad, j = e8.isSignedIn, O = e8.fetchBasicProfile, x = e8.redirectUri, I = e8.discoveryDocs, w = e8.uxMode, k = e8.scope, A = e8.accessType, _ = e8.responseType, E = e8.jsSrc, T = void 0 === E ? "https://apis.google.com/js/api.js" : E, L = e8.prompt, M = o2(Object(m.useState)(!1), 2), P = M[0], C = M[1];
                return Object(m.useEffect)(function() {
                    var e10 = !1, n5 = g || l;
                    return f1(document, "script", "google-login", T, function() {
                        var o3 = {
                            client_id: y,
                            cookie_policy: b,
                            login_hint: h,
                            hosted_domain: v,
                            fetch_basic_profile: O,
                            discoveryDocs: I,
                            ux_mode: w,
                            redirect_uri: x,
                            scope: k,
                            access_type: A
                        };
                        "code" === _ && (o3.access_type = "offline"), window.gapi.load("auth2", function() {
                            var r = window.gapi.auth2.getAuthInstance();
                            r ? r.then(function() {
                                e10 || (j && r.isSignedIn.get() ? (C(!0), c(!0), t8(r.currentUser.get())) : (C(!0), c(!1)));
                            }, function(e) {
                                l(e);
                            }) : window.gapi.auth2.init(o3).then(function(n) {
                                if (!e10) {
                                    C(!0);
                                    var o = j && n.isSignedIn.get();
                                    c(o), o && t8(n.currentUser.get());
                                }
                            }, function(e) {
                                C(!0), c(!1), n5(e);
                            });
                        });
                    }, function(e) {
                        n5(e);
                    }), function() {
                        e10 = !0, d1(document, "google-login");
                    };
                }, []), Object(m.useEffect)(function() {
                    S && n4();
                }, [
                    P
                ]), {
                    signIn: n4,
                    loaded: P
                };
            });
            function v1(e) {
                var t = l1(Object(m.useState)(!1), 2), n = t[0], o = t[1], r = l1(Object(m.useState)(!1), 2), i = r[0], a = r[1], c = e.tag, u = e.type, s = e.className, f = e.disabledStyle, d = e.buttonText, y = e.children, h = e.render, v = e.theme, S = e.icon, O = e.disabled, x = j1({
                    jsSrc: e.jsSrc,
                    onFailure: e.onFailure,
                    onScriptLoadFailure: e.onScriptLoadFailure,
                    clientId: e.clientId,
                    cookiePolicy: e.cookiePolicy,
                    loginHint: e.loginHint,
                    hostedDomain: e.hostedDomain,
                    fetchBasicProfile: e.fetchBasicProfile,
                    discoveryDocs: e.discoveryDocs,
                    uxMode: e.uxMode,
                    redirectUri: e.redirectUri,
                    scope: e.scope,
                    accessType: e.accessType,
                    onLogoutSuccess: e.onLogoutSuccess
                }), I = x.signOut, w = O || !x.loaded;
                if (h) return h({
                    onClick: I,
                    disabled: w
                });
                var k = {
                    backgroundColor: "dark" === v ? "rgb(66, 133, 244)" : "#fff",
                    display: "inline-flex",
                    alignItems: "center",
                    color: "dark" === v ? "#fff" : "rgba(0, 0, 0, .54)",
                    boxShadow: "0 2px 2px 0 rgba(0, 0, 0, .24), 0 0 1px 0 rgba(0, 0, 0, .24)",
                    padding: 0,
                    borderRadius: 2,
                    border: "1px solid transparent",
                    fontSize: 14,
                    fontWeight: "500",
                    fontFamily: "Roboto, sans-serif"
                }, A = {
                    cursor: "pointer",
                    backgroundColor: "dark" === v ? "#3367D6" : "#eee",
                    color: "dark" === v ? "#fff" : "rgba(0, 0, 0, .54)",
                    opacity: 1
                }, _ = w ? Object.assign({}, k, f) : i ? Object.assign({}, k, A) : n ? Object.assign({}, k, {
                    cursor: "pointer",
                    opacity: 0.9
                }) : k;
                return b1.a.createElement(c, {
                    onMouseEnter: function() {
                        return o(!0);
                    },
                    onMouseLeave: function() {
                        o(!1), a(!1);
                    },
                    onMouseDown: function() {
                        return a(!0);
                    },
                    onMouseUp: function() {
                        return a(!1);
                    },
                    onClick: I,
                    style: _,
                    type: u,
                    disabled: w,
                    className: s
                }, [
                    S && b1.a.createElement(g1, {
                        key: 1,
                        active: i
                    }),
                    b1.a.createElement(p1, {
                        icon: S,
                        key: 2
                    }, y || d)
                ]);
            }
            y1.defaultProps = {
                type: "button",
                tag: "button",
                buttonText: "Sign in with Google",
                scope: "profile email",
                accessType: "online",
                prompt: "",
                cookiePolicy: "single_host_origin",
                fetchBasicProfile: !0,
                isSignedIn: !1,
                uxMode: "popup",
                disabledStyle: {
                    opacity: 0.6
                },
                icon: !0,
                theme: "light",
                onRequest: function() {}
            };
            var S1 = y1, j1 = function(e11) {
                var t9 = e11.jsSrc, n = void 0 === t9 ? "https://apis.google.com/js/api.js" : t9, o = e11.onFailure, r = e11.onScriptLoadFailure, i = e11.clientId, a = e11.cookiePolicy, u = e11.loginHint, l = e11.hostedDomain, s = e11.fetchBasicProfile, p = e11.discoveryDocs, g = e11.uxMode, y = e11.redirectUri, b = e11.scope, h = e11.accessType, v = e11.onLogoutSuccess, S = c1(Object(m.useState)(!1), 2), j = S[0], O = S[1], x = Object(m.useCallback)(function() {
                    if (window.gapi) {
                        var e12 = window.gapi.auth2.getAuthInstance();
                        null != e12 && e12.then(function() {
                            e12.signOut().then(function() {
                                e12.disconnect(), v();
                            });
                        }, function(e) {
                            return o(e);
                        });
                    }
                }, [
                    v
                ]);
                return Object(m.useEffect)(function() {
                    var e = r || o;
                    return f1(document, "script", "google-login", n, function() {
                        var t10 = {
                            client_id: i,
                            cookie_policy: a,
                            login_hint: u,
                            hosted_domain: l,
                            fetch_basic_profile: s,
                            discoveryDocs: p,
                            ux_mode: g,
                            redirect_uri: y,
                            scope: b,
                            access_type: h
                        };
                        window.gapi.load("auth2", function() {
                            window.gapi.auth2.getAuthInstance() ? O(!0) : window.gapi.auth2.init(t10).then(function() {
                                return O(!0);
                            }, function(t) {
                                return e(t);
                            });
                        });
                    }, function(t) {
                        e(t);
                    }), function() {
                        d1(document, "google-login");
                    };
                }, []), {
                    signOut: x,
                    loaded: j
                };
            };
            v1.defaultProps = {
                type: "button",
                tag: "button",
                buttonText: "Logout of Google",
                disabledStyle: {
                    opacity: 0.6
                },
                icon: !0,
                theme: "light",
                jsSrc: "https://apis.google.com/js/api.js"
            };
            var O1 = v1;
        }
    ], t1.c = o1, t1.d = function(e, n, o) {
        t1.o(e, n) || Object.defineProperty(e, n, {
            enumerable: !0,
            get: o
        });
    }, t1.r = function(e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        });
    }, t1.t = function(e, n) {
        if (1 & n && (e = t1(e)), 8 & n) return e;
        if (4 & n && "object" == typeof e && e && e.__esModule) return e;
        var o = Object.create(null);
        if (t1.r(o), Object.defineProperty(o, "default", {
            enumerable: !0,
            value: e
        }), 2 & n && "string" != typeof e) for(var r in e)t1.d(o, r, (function(t) {
            return e[t];
        }).bind(null, r));
        return o;
    }, t1.n = function(e) {
        var n = e && e.__esModule ? function() {
            return e.default;
        } : function() {
            return e;
        };
        return t1.d(n, "a", n), n;
    }, t1.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t);
    }, t1.p = "", t1(t1.s = 4);
    function t1(e) {
        if (o1[e]) return o1[e].exports;
        var r = o1[e] = {
            i: e,
            l: !1,
            exports: {}
        };
        return n1[e].call(r.exports, r, r.exports, t1), r.l = !0, r.exports;
    }
});

},{"react":"21dqq"}],"Lt25K":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "refreshTokenSetup", ()=>refreshTokenSetup
);
const refreshTokenSetup = (res)=>{
    // Timing to renew access token
    let refreshTiming = (res.tokenObj.expires_in || 3300) * 1000;
    const refreshToken = async ()=>{
        const newAuthRes = await res.reloadAuthResponse();
        refreshTiming = (newAuthRes.expires_in || 3300) * 1000;
        console.log('newAuthRes:', newAuthRes);
        // saveUserToken(newAuthRes.access_token);  <-- save new token
        localStorage.setItem('authToken', newAuthRes.id_token);
        // Setup the other timer after the first one
        setTimeout(refreshToken, refreshTiming);
    };
    // Setup first refresh timer
    setTimeout(refreshToken, refreshTiming);
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"km3Ru":[function(require,module,exports) {
"use strict";
var Refresh = require('react-refresh/runtime');
function debounce(func, delay) {
    var args1;
    var timeout = undefined;
    return function(args) {
        clearTimeout(timeout);
        timeout = setTimeout(function() {
            timeout = undefined;
            func.call(null, args);
        }, delay);
    };
}
var enqueueUpdate = debounce(function() {
    Refresh.performReactRefresh();
}, 30); // Everthing below is either adapted or copied from
// https://github.com/facebook/metro/blob/61de16bd1edd7e738dd0311c89555a644023ab2d/packages/metro/src/lib/polyfills/require.js
// MIT License - Copyright (c) Facebook, Inc. and its affiliates.
module.exports.prelude = function(module) {
    window.$RefreshReg$ = function(type, id) {
        Refresh.register(type, module.id + ' ' + id);
    };
    window.$RefreshSig$ = Refresh.createSignatureFunctionForTransform;
};
module.exports.postlude = function(module) {
    if (isReactRefreshBoundary(module.exports)) {
        registerExportsForReactRefresh(module);
        if (module.hot) {
            module.hot.dispose(function(data) {
                if (Refresh.hasUnrecoverableErrors()) window.location.reload();
                data.prevExports = module.exports;
            });
            module.hot.accept(function(getParents) {
                var prevExports = module.hot.data.prevExports;
                var nextExports = module.exports; // Since we just executed the code for it, it's possible
                // that the new exports make it ineligible for being a boundary.
                var isNoLongerABoundary = !isReactRefreshBoundary(nextExports); // It can also become ineligible if its exports are incompatible
                // with the previous exports.
                // For example, if you add/remove/change exports, we'll want
                // to re-execute the importing modules, and force those components
                // to re-render. Similarly, if you convert a class component
                // to a function, we want to invalidate the boundary.
                var didInvalidate = shouldInvalidateReactRefreshBoundary(prevExports, nextExports);
                if (isNoLongerABoundary || didInvalidate) {
                    // We'll be conservative. The only case in which we won't do a full
                    // reload is if all parent modules are also refresh boundaries.
                    // In that case we'll add them to the current queue.
                    var parents = getParents();
                    if (parents.length === 0) {
                        // Looks like we bubbled to the root. Can't recover from that.
                        window.location.reload();
                        return;
                    }
                    return parents;
                }
                enqueueUpdate();
            });
        }
    }
};
function isReactRefreshBoundary(exports) {
    if (Refresh.isLikelyComponentType(exports)) return true;
    if (exports == null || typeof exports !== 'object') // Exit if we can't iterate over exports.
    return false;
    var hasExports = false;
    var areAllExportsComponents = true;
    let isESM = '__esModule' in exports;
    for(var key in exports){
        hasExports = true;
        if (key === '__esModule') continue;
        var desc = Object.getOwnPropertyDescriptor(exports, key);
        if (desc && desc.get && !isESM) // Don't invoke getters for CJS as they may have side effects.
        return false;
        var exportValue = exports[key];
        if (!Refresh.isLikelyComponentType(exportValue)) areAllExportsComponents = false;
    }
    return hasExports && areAllExportsComponents;
}
function shouldInvalidateReactRefreshBoundary(prevExports, nextExports) {
    var prevSignature = getRefreshBoundarySignature(prevExports);
    var nextSignature = getRefreshBoundarySignature(nextExports);
    if (prevSignature.length !== nextSignature.length) return true;
    for(var i = 0; i < nextSignature.length; i++){
        if (prevSignature[i] !== nextSignature[i]) return true;
    }
    return false;
} // When this signature changes, it's unsafe to stop at this refresh boundary.
function getRefreshBoundarySignature(exports) {
    var signature = [];
    signature.push(Refresh.getFamilyByType(exports));
    if (exports == null || typeof exports !== 'object') // Exit if we can't iterate over exports.
    // (This is important for legacy environments.)
    return signature;
    let isESM = '__esModule' in exports;
    for(var key in exports){
        if (key === '__esModule') continue;
        var desc = Object.getOwnPropertyDescriptor(exports, key);
        if (desc && desc.get && !isESM) continue;
        var exportValue = exports[key];
        signature.push(key);
        signature.push(Refresh.getFamilyByType(exportValue));
    }
    return signature;
}
function registerExportsForReactRefresh(module) {
    var exports = module.exports, id = module.id;
    Refresh.register(exports, id + ' %exports%');
    if (exports == null || typeof exports !== 'object') // Exit if we can't iterate over exports.
    // (This is important for legacy environments.)
    return;
    let isESM = '__esModule' in exports;
    for(var key in exports){
        var desc = Object.getOwnPropertyDescriptor(exports, key);
        if (desc && desc.get && !isESM) continue;
        var exportValue = exports[key];
        Refresh.register(exportValue, id + ' %exports% ' + key);
    }
}

},{"react-refresh/runtime":"786KC"}],"blhL0":[function(require,module,exports) {
var $parcel$ReactRefreshHelpers$a47f = require("@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js");
var prevRefreshReg = window.$RefreshReg$;
var prevRefreshSig = window.$RefreshSig$;
$parcel$ReactRefreshHelpers$a47f.prelude(module);

try {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _jsxDevRuntime = require("react/jsx-dev-runtime");
var _react = require("react");
var _reactDefault = parcelHelpers.interopDefault(_react);
var _reactGoogleLogin = require("react-google-login");
const clientId = '638797613324-33d5aohc3l45ot8kdcc4ctem8a7obj94.apps.googleusercontent.com';
function Logout() {
    const onSuccess = ()=>{
        console.log('Logout made successfully');
        alert('Logout made successfully ✌');
    };
    return /*#__PURE__*/ _jsxDevRuntime.jsxDEV("div", {
        children: /*#__PURE__*/ _jsxDevRuntime.jsxDEV(_reactGoogleLogin.GoogleLogout, {
            clientId: clientId,
            buttonText: "Logout",
            onLogoutSuccess: onSuccess
        }, void 0, false, {
            fileName: "static/react/components/Logout.js",
            lineNumber: 15,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "static/react/components/Logout.js",
        lineNumber: 14,
        columnNumber: 9
    }, this);
}
_c = Logout;
exports.default = Logout;
var _c;
$RefreshReg$(_c, "Logout");

  $parcel$ReactRefreshHelpers$a47f.postlude(module);
} finally {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
}
},{"react/jsx-dev-runtime":"iTorj","react":"21dqq","react-google-login":"dBsjF","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js":"km3Ru"}],"78iHw":[function(require,module,exports) {
var $parcel$ReactRefreshHelpers$36b6 = require("@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js");
var prevRefreshReg = window.$RefreshReg$;
var prevRefreshSig = window.$RefreshSig$;
$parcel$ReactRefreshHelpers$36b6.prelude(module);

try {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _jsxDevRuntime = require("react/jsx-dev-runtime");
var _react = require("react");
var _reactDefault = parcelHelpers.interopDefault(_react);
var _reactGoogleLogin = require("react-google-login");
// refresh token
var _refreshToken = require("../utils/refreshToken");
var _s = $RefreshSig$();
const clientId = '638797613324-33d5aohc3l45ot8kdcc4ctem8a7obj94.apps.googleusercontent.com';
function LoginHooks() {
    _s();
    const onSuccess = (res)=>{
        console.log('Login Success: currentUser:', res.profileObj);
        alert(`Logged in successfully welcome ${res.profileObj.name} 😍. \n See console for full profile object.`);
        _refreshToken.refreshTokenSetup(res);
    };
    const onFailure = (res)=>{
        console.log('Login failed: res:', res);
        alert(`Failed to login. 😢 Please ping this to repo owner twitter.com/sivanesh_fiz`);
    };
    const { signIn  } = _reactGoogleLogin.useGoogleLogin({
        onSuccess,
        onFailure,
        clientId,
        isSignedIn: true,
        accessType: 'offline'
    });
    return /*#__PURE__*/ _jsxDevRuntime.jsxDEV("button", {
        onClick: signIn,
        className: "button",
        children: [
            /*#__PURE__*/ _jsxDevRuntime.jsxDEV("img", {
                src: "icons/google.svg",
                alt: "google login",
                className: "icon"
            }, void 0, false, {
                fileName: "static/react/components/LoginHooks.js",
                lineNumber: 38,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ _jsxDevRuntime.jsxDEV("span", {
                className: "buttonText",
                children: "Sign in with Google"
            }, void 0, false, {
                fileName: "static/react/components/LoginHooks.js",
                lineNumber: 40,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "static/react/components/LoginHooks.js",
        lineNumber: 37,
        columnNumber: 9
    }, this);
}
_s(LoginHooks, "QecT91aAQ8VpaPV0pp8B14sjybY=", false, function() {
    return [
        _reactGoogleLogin.useGoogleLogin
    ];
});
_c = LoginHooks;
exports.default = LoginHooks;
var _c;
$RefreshReg$(_c, "LoginHooks");

  $parcel$ReactRefreshHelpers$36b6.postlude(module);
} finally {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
}
},{"react/jsx-dev-runtime":"iTorj","react":"21dqq","react-google-login":"dBsjF","../utils/refreshToken":"Lt25K","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js":"km3Ru"}],"dKh8n":[function(require,module,exports) {
var $parcel$ReactRefreshHelpers$8f33 = require("@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js");
var prevRefreshReg = window.$RefreshReg$;
var prevRefreshSig = window.$RefreshSig$;
$parcel$ReactRefreshHelpers$8f33.prelude(module);

try {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _jsxDevRuntime = require("react/jsx-dev-runtime");
var _react = require("react");
var _reactDefault = parcelHelpers.interopDefault(_react);
var _reactGoogleLogin = require("react-google-login");
var _s = $RefreshSig$();
const clientId = '638797613324-33d5aohc3l45ot8kdcc4ctem8a7obj94.apps.googleusercontent.com';
function LogoutHooks() {
    _s();
    const onLogoutSuccess = (res)=>{
        console.log('Logged out Success');
        alert('Logged out Successfully ✌');
    };
    const onFailure = ()=>{
        console.log('Handle failure cases');
    };
    const { signOut  } = _reactGoogleLogin.useGoogleLogout({
        clientId,
        onLogoutSuccess,
        onFailure
    });
    return /*#__PURE__*/ _jsxDevRuntime.jsxDEV("button", {
        onClick: signOut,
        className: "button",
        children: [
            /*#__PURE__*/ _jsxDevRuntime.jsxDEV("img", {
                src: "icons/google.svg",
                alt: "google login",
                className: "icon"
            }, void 0, false, {
                fileName: "static/react/components/LogoutHooks.js",
                lineNumber: 25,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ _jsxDevRuntime.jsxDEV("span", {
                className: "buttonText",
                children: "Sign out"
            }, void 0, false, {
                fileName: "static/react/components/LogoutHooks.js",
                lineNumber: 27,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "static/react/components/LogoutHooks.js",
        lineNumber: 24,
        columnNumber: 9
    }, this);
}
_s(LogoutHooks, "DWr2e+lO6HJc0utxH8iyyUaBQww=", false, function() {
    return [
        _reactGoogleLogin.useGoogleLogout
    ];
});
_c = LogoutHooks;
exports.default = LogoutHooks;
var _c;
$RefreshReg$(_c, "LogoutHooks");

  $parcel$ReactRefreshHelpers$8f33.postlude(module);
} finally {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
}
},{"react/jsx-dev-runtime":"iTorj","react":"21dqq","react-google-login":"dBsjF","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js":"km3Ru"}],"4ZYvD":[function(require,module,exports) {
var $parcel$ReactRefreshHelpers$b220 = require("@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js");
var prevRefreshReg = window.$RefreshReg$;
var prevRefreshSig = window.$RefreshSig$;
$parcel$ReactRefreshHelpers$b220.prelude(module);

try {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _jsxDevRuntime = require("react/jsx-dev-runtime");
var _react = require("react");
function TestPage() {
    return /*#__PURE__*/ _jsxDevRuntime.jsxDEV("div", {
        children: /*#__PURE__*/ _jsxDevRuntime.jsxDEV("h1", {
            children: "Test page"
        }, void 0, false, {
            fileName: "static/react/TestPage.js",
            lineNumber: 5,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "static/react/TestPage.js",
        lineNumber: 4,
        columnNumber: 9
    }, this);
}
_c = TestPage;
exports.default = TestPage;
var _c;
$RefreshReg$(_c, "TestPage");

  $parcel$ReactRefreshHelpers$b220.postlude(module);
} finally {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
}
},{"react/jsx-dev-runtime":"iTorj","react":"21dqq","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js":"km3Ru"}],"3JPlB":[function(require,module,exports) {
var $parcel$ReactRefreshHelpers$2867 = require("@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js");
var prevRefreshReg = window.$RefreshReg$;
var prevRefreshSig = window.$RefreshSig$;
$parcel$ReactRefreshHelpers$2867.prelude(module);

try {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _jsxDevRuntime = require("react/jsx-dev-runtime");
var _react = require("react");
function TestPage1() {
    return /*#__PURE__*/ _jsxDevRuntime.jsxDEV("div", {
        children: /*#__PURE__*/ _jsxDevRuntime.jsxDEV("h1", {
            children: "TestPage1"
        }, void 0, false, {
            fileName: "static/react/TestPage1.js",
            lineNumber: 5,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "static/react/TestPage1.js",
        lineNumber: 4,
        columnNumber: 9
    }, this);
}
_c = TestPage1;
exports.default = TestPage1;
var _c;
$RefreshReg$(_c, "TestPage1");

  $parcel$ReactRefreshHelpers$2867.postlude(module);
} finally {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
}
},{"react/jsx-dev-runtime":"iTorj","react":"21dqq","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js":"km3Ru"}]},["kn9T2","kh26k","3jHXO"], "3jHXO", "parcelRequire46e4")

//# sourceMappingURL=index.js.map
