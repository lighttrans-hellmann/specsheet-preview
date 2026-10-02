# Wavefront Phase Modifier [Surface, Profile-Defined]

<div class="specheader">
  <div class="title">Digital Twin Specification</div>
  <div class="content">
    <div class="spec-grid">
      <div class="spec-label">Twin Code:</div>
      <div class="spec-value mono">CF-WPMS01</div>

      <div class="spec-label">Twin Name:</div>
      <div class="spec-value">Wavefront Phase Modifier [Surface, Profile-Defined]</div>

      <div class="spec-label">Twin Family:</div>
      <div class="spec-value">Wavefront Phase Modifier</div>

      <div class="spec-label">Family Role:</div>
      <div class="spec-value">Applies a specified wavefront phase profile on a curved surface</div>

      <div class="spec-label">Category:</div>
      <div class="spec-value">Component</div>

      <div class="spec-label">Type:</div>
      <div class="spec-value">Function-Based</div>

      <div class="spec-label">Operation Type:</div>
      <div class="spec-value">Pointwise wavefront phase modifier</div>

      <div class="spec-label">Operator Domain:</div>
      <div class="spec-value">Surface domain</div>

      <div class="spec-label">VLF Package:</div>
      <div class="spec-value">Platform</div>

      <div class="spec-label">Version:</div>
      <div class="spec-value">1.0</div>
    </div>
  </div>
</div>

## 1 Purpose

Mathematically, the operation is described by:

$$\psi^{\mathrm{out}}(u,v) = \psi^{\mathrm{in}}(u,v) + \Delta \psi^{\mathrm{prf}}(u,v), \quad (1)$$

where \((u,v)\) are coordinates on the WPM surface. The phase profile is specified with respect to the reference \(xy\) coordinates and applied on the selected curved surface. This twin is useful for modeling phase profiles on curved substrates, such as in HOEs or curved metalenses.

## 2 Geometric Support

This twin is defined on a curved reference surface. The user selects the reference surface from the available surfaces in the optical setup. The phase profile is stored in reference coordinates and transformed to the surface coordinates internally.

### Model Context: Local Coordinate Transformation

The surface variant requires a local coordinate transformation: the phase profile may be stored in reference coordinates, but the phase addition occurs in the local surface coordinates. The model handles this transformation automatically.

## 3 Supported Channels

This twin supports illumination from the front side only. The user selects either the transmission (T) or reflection (R) channel as the active output channel. The selected channel is the only generated output; the opposite channel is not generated.

## 4 Simulation Model

This is a function-based optical digital twin. It applies the specified wavefront phase profile to the incoming wavefront phase on the selected curved surface. The phase profile can be defined in three input formats: Even Order Radial Polynomial, User-Defined Formula, or Data Based.

The twin includes an aperture option: the user can select whether the component is used as Single Function without Aperture or Single Function with Aperture. The aperture is applied on the reference surface before the phase modification.

## 5 Parameters Where This Sheet Adds Guidance

The complete parameter documentation is available in the VirtualLab Fusion manual and from the twin via Help. This sheet only lists parameters for which additional modeling interpretation, usage guidance, or cross-twin selection advice is useful.

### Requested Phase Profile

**Role:** Specifies the wavefront phase profile \(\Delta \psi^{\mathrm{prf}}\) to be added.

**Spec-sheet insight:** The profile is specified in reference coordinates. The component internally handles the transformation to surface coordinates.

### Reference Surface

**Role:** Selects the curved surface on which the phase is added.

**Spec-sheet insight:** The user can load, edit, or view the selected surface. The phase addition occurs in the local coordinates of this surface.

### Flip Profile Phase Sign

**Role:** Inverts the sign of the specified wavefront phase profile.

**Spec-sheet insight:** Use this to correct a wrong sign setting without redefining the profile.

### Selected Output Channel

**Role:** Selects the active output channel: Transmission or Reflection.

**Spec-sheet insight:** Only one channel is generated. The opposite channel is not available.

### Consider Phase Effect Only

**Role:** Ignores amplitude and polarization effects from energy conservation.

**Spec-sheet insight:** Use this for studying the pure phase effect in isolation.

### Display Wavefront Profile Data After Simulation

**Role:** Outputs the wavefront profile data after simulation.

**Spec-sheet insight:** The displayed data can be reused as input for other twins.

### Aperture Size and Shape

**Role:** Defines the aperture truncation applied to the field before the phase modification.

**Spec-sheet insight:** The aperture is applied in the reference domain before the phase addition.

## 6 Recommended Usage

- Use this twin when the phase profile must be applied on a curved surface, such as in HOEs or curved metalenses.
- Use the aperture option when the finite size of the optical element is physically relevant.
- Use the Data Based input format for phase profiles from measurements or external simulations.
- Use the Display Wavefront Profile Data After Simulation option to verify the applied profile.

## 7 Related Twins

Related twins belong to the same function-based family or to closely neighboring function-based variants.

| Related Twin | Main Distinction |
|--------------|------------------|
| Wavefront Phase Modifier [Plane, Profile-Defined] | Same profile-defined concept; phase addition on a plane. |
| Wavefront Phase Modifier [Surface, Output-Defined] | Same surface geometry; profile is computed from desired output phase. |
| Wavefront Phase Modifier [Plane, Output-Defined] | Output-defined concept on a plane. |

## 8 Possible Replacement Twins

Replacement twins provide another modeling route for the same design intention.

| Possible Replacement Twin | When It Replaces This Twin |
|---------------------------|----------------------------|
| Wavefront Phase Modifier [Surface, Output-Defined] | Use when the desired output wavefront phase on the surface is known. |
| Holographic Optical Element (HOE) Twin | Use when the phase profile should be realized by a diffractive structure on a curved substrate. |
| Refractive Surface Twin | Use when the phase profile should be realized by a curved refractive surface. |

## 9 Further Reading

For complete software parameter documentation, see the VirtualLab Fusion manual, Sec. 69.8, Wavefront Phase Modifier [Surface, Profile-Defined].

For the theoretical foundations of the Wavefront Phase Modifier family see the white paper on From Phase to Structure: A Two-Step Design Workflow with Wavefront Phase Modifier Twins (LightTrans Document ID: WP-WPM-PUB).

<div class="specmetadata">
  <div class="content">
    <div class="grid">
      <div class="label">Author:</div>
      <div class="value">LightTrans International GmbH</div>

      <div class="label">Contact:</div>
      <div class="value">support@lighttrans.com</div>

      <div class="label">Keywords:</div>
      <div class="value">Wavefront Phase Modifier, Surface, Profile-Defined, phase profile, curved surface, function-based, HOE, metalens, optical design, VirtualLab Fusion</div>

      <div class="label">Related Twins:</div>
      <div class="value mono">CF-WPMS02, CF-WPMP01, CF-WPMP02</div>
    </div>
  </div>
</div>

<div class="button-container" style="text-align: center; margin-top: 30px;">

<a href="..\..\assets\pdfs\CF-WPMS01.pdf" class="spec-button button-primary" download>📥 Download PDF</a>

<a href="https://www.lighttrans.com/product/optical-digital-twin-hub.html" class="spec-button button-primary" target="_blank">Go to Digital Twin Hub</a>

<a href="..\Overview_List_SpecSheets\" class="spec-button button-primary">📋 View All Spec Sheets</a>

</div>