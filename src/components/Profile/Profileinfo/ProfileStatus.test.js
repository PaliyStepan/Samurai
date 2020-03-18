import React from "react";
import {create} from "react-test-renderer";
import ProfileStatus from "./ProfileStatus";

describe("Profile status comp", () => {

    test("status should be in state", () => {
        const component = create(<ProfileStatus status="this is a TEST status" />);
        const instance = component.getInstance();
        expect(instance.state.status).toBe("this is a TEST status");
    });

    test("After creation, span with status must display", () => {
        const component = create(<ProfileStatus status="this is a TEST status" />);
        const root = component.root;
        let span = root.findByType('span');
        expect(span).not.toBeNull();
    });

    test("After creation, input should not display", () => {
        const component = create(<ProfileStatus status="this is a TEST status" />);
        const root = component.root;
        expect( () => {
            let input = root.findByType('input');
        }).toThrow();
    });

    test("After creation, span must have correct status", () => {
        const component = create(<ProfileStatus status="this is a TEST status" />);
        const root = component.root;
        let span = root.findByType('span');
        expect(span.children[0]).toBe("this is a TEST status");
    });

    test("input should be displayed in editMode", () => {
        const component = create(<ProfileStatus status="this is a TEST status" />);
        const root = component.root;
        let span = root.findByType('span');
        span.props.onDoubleClick();
        let input = root.findByType('input');
        expect(input.props.value).toBe("this is a TEST status");
    });



    test("callback should be called", () => {
        let mockCallback = jest.fn();
        const component = create(<ProfileStatus status="this is a TEST status" updateStatus={mockCallback}/>);

        const instance = component.getInstance();
        instance.deactivatedEditMode();
        expect(mockCallback.mock.calls.length).toBe(1);
    });


});