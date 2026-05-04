import * as THREE from 'three/webgpu'
import { Cycles } from './Cycles.js'

// CP2077-style: electric yellow reveal, dark teal haze, warm / teal key light.
const presets = {
    day:   { revealColor: new THREE.Color('#FCEE09'), revealIntensity: 15, electricField: 0, temperature: 5, lightColor: new THREE.Color('#fff8e6'), lightIntensity: 1.4, shadowColor: new THREE.Color('#1a1208'), fogColorA: new THREE.Color('#0a1510'), fogColorB: new THREE.Color('#050808'), fogNearRatio: 0.315, fogFarRatio: 1.25 },
    dusk:  { revealColor: new THREE.Color('#ffb020'), revealIntensity: 6.5, electricField: 0.3, temperature: 0, lightColor: new THREE.Color('#ffc9a0'), lightIntensity: 1.2, shadowColor: new THREE.Color('#2a1810'), fogColorA: new THREE.Color('#0f1814'), fogColorB: new THREE.Color('#1a0a06'), fogNearRatio: 0, fogFarRatio: 1.25 },
    night: { revealColor: new THREE.Color('#FCEE09'), revealIntensity: 12, electricField: 1, temperature: -7.5, lightColor: new THREE.Color('#6a9a8a'), lightIntensity: 4.2, shadowColor: new THREE.Color('#050806'), fogColorA: new THREE.Color('#020504'), fogColorB: new THREE.Color('#0a1814'), fogNearRatio: -0.85, fogFarRatio: 1 },
    dawn:  { revealColor: new THREE.Color('#fce45a'), revealIntensity: 5.4, electricField: 0.25, temperature: 0, lightColor: new THREE.Color('#ffe8c8'), lightIntensity: 1.25, shadowColor: new THREE.Color('#3a2018'), fogColorA: new THREE.Color('#0c1410'), fogColorB: new THREE.Color('#1a1208'), fogNearRatio: 0.3, fogFarRatio: 1.25 },
}

export class DayCycles extends Cycles
{
    constructor()
    {
        const forcedProgress = import.meta.env.VITE_DAY_CYCLE_PROGRESS ? parseFloat(import.meta.env.VITE_DAY_CYCLE_PROGRESS) : null
        super('🕜 Day Cycles', 4 * 60, forcedProgress, false)
    }

    get presets()
    {
        return presets
    }

    getKeyframesDescriptions()
    {
        // Debug
        if(this.game.debug.active)
        {
            this.debugPanel.addBinding(this, 'duration', { min: 1, max: 60 * 10, step: 1 })

            for(const presetKey in presets)
            {
                const preset = presets[presetKey]
                const presetsDebugPanel = this.debugPanel.addFolder({
                    title: presetKey,
                    expanded: true,
                })

                this.game.debug.addThreeColorBinding(presetsDebugPanel, preset.revealColor, 'revealColor')
                presetsDebugPanel.addBinding(preset, 'revealIntensity', { min: 0, max: 20, step: 0.001 })
                this.game.debug.addThreeColorBinding(presetsDebugPanel, preset.lightColor, 'lightColor')
                presetsDebugPanel.addBinding(preset, 'lightIntensity', { min: 0, max: 20 })
                this.game.debug.addThreeColorBinding(presetsDebugPanel, preset.shadowColor, 'shadowColor')
                this.game.debug.addThreeColorBinding(presetsDebugPanel, preset.fogColorA, 'fogColorA')
                this.game.debug.addThreeColorBinding(presetsDebugPanel, preset.fogColorB, 'fogColorB')
                presetsDebugPanel.addBinding(preset, 'fogNearRatio', { label: 'near', min: -2, max: 2, step: 0.001 })
                presetsDebugPanel.addBinding(preset, 'fogFarRatio', { label: 'far', min: -2, max: 2, step: 0.001 })
            }
        }

        return [
            [
                { properties: presets.day, stop: 0.0 }, // day
                { properties: presets.day, stop: 0.15 }, // day
                { properties: presets.dusk, stop: 0.25 }, // Dusk
                { properties: presets.night, stop: 0.35 }, // Night
                { properties: presets.night, stop: 0.6 }, // Night
                { properties: presets.dawn, stop: 0.8 }, // Dawn
                { properties: presets.day, stop: 0.9 }, // day
            ]
        ]
    }

    getIntervalDescriptions()
    {
        return [
            { name: 'night', start: 0.25, end: 0.7 },
            { name: 'deepNight', start: 0.35, end: 0.6 },
        ]
    }
}